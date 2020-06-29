import React from "react";
import { Table, Popconfirm, Input, Button, Icon } from "antd";
import Highlighter from 'react-highlight-words';
import { EditableFormRow, EditableContext } from "./EditableFormRow";
import EditableCell from "./EditableCell";
// import { plColumns } from "./plColumns";
import { cleanTheData } from "../data/plCleanData";
import 'antd/dist/antd.css';

//api connect
import ConnectAPI from "../../../../connectAPI";

import ConfirmationPopup from '../../../../components/global/confirmation-popup';


export default class EditableTable extends React.Component {
  

  constructor(props){
    super(props);
    this.state = {
       data: null,
       editingKey: "",
       searchText: ''
    };
    this.confirmationDialog = React.createRef();
    
 }
  
 componentDidMount() {
  var conn = new ConnectAPI();
  conn.getFetch('user', '')
  .then(data => {
      this.setState({
        data: cleanTheData(data.map((d,index) => {d.count = index + 1; return d;}))
     });
  });
}
   
 

handleSearch = (selectedKeys, confirm) => {
  confirm();
  this.setState({ searchText: selectedKeys[0] });
};

handleReset = clearFilters => {
  clearFilters();
  this.setState({ searchText: '' });
};



 
 //search 
 getColumnSearchProps = dataIndex => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={node => {
          this.searchInput = node;
        }}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
        style={{ width: 188, marginBottom: 8, display: 'block' }}
      />
      <Button
        type="primary"
        onClick={() => this.handleSearch(selectedKeys, confirm)}
        icon="search"
        size="small"
        style={{ width: 90, marginRight: 8 }}
      >
        Search
      </Button>
      <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
        Reset
      </Button>
    </div>
  ),
  filterIcon: filtered => (
    <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      .toString()
      .toLowerCase()
      .includes(value.toLowerCase()),
  onFilterDropdownVisibleChange: visible => {
    if (visible) {
      setTimeout(() => this.searchInput.select());
    }
  },
  render: text => (
    <Highlighter
      highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
      searchWords={[this.state.searchText]}
      autoEscape
      textToHighlight={text.toString()}
    />
  ),
});

 plColumns = [
  {
    title: "No",
    dataIndex: "count",
    width: "10%",
    editable: false
  },
  {
    title: "user_id",
    dataIndex: "id",
    width: "10%",
    editable: false,
  },
  {
    title: "First Name",
    dataIndex: "firstName",
    width: "15%",
    key: "firstName",
    editable: true,
    ...this.getColumnSearchProps('firstName')
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    width: "10%",
    key: "lastName",
    editable: true,
    ...this.getColumnSearchProps('lastName')
  },
  {
    title: "email",
    dataIndex: "email",
    width: "10%",
    key: "email",
    editable: true,
    ...this.getColumnSearchProps('email')
  },
  {
    title: "password",
    dataIndex: "password",
    width: "10%",
    key: "password",
    editable: true,
    ...this.getColumnSearchProps('password')
  },
  {
    title: "roles",
    dataIndex: "roles",
    width: "15%",
    key: "roles",
    editable: true,
    ...this.getColumnSearchProps('roles')
  }
];

  columns = [
    ...this.plColumns,
    {
      title: "operation",
      dataIndex: "operation",
      key: "operation",
      render: (text, record) => {
        const editable = this.isEditing(record);
        return (
          <div>
            {editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      onClick={() => this.save(form, record.key, record.id)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="Sure to cancel?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
              <a onClick={() => this.edit(record.key)}><i className="material-icons primary-color">edit</i></a>
            )}
            <a className="ml-10" onClick={() => this.ondelete(record.key, record.id)}><i className="material-icons primary-color">delete</i></a>
          </div>
        );
      }
    },

  ];

  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }
  
  ondelete(key, id) {
    this.key = key;
    this.id = id;
    this.confirmationDialog.current.openDialog();
  }

  deleteUser(popupResponse) {
    if (popupResponse) {
      let {data} = this.state;
      this.setState({ 
        data: data.filter((dt,index) =>(dt.key !== this.key))
      });
      var conn = new ConnectAPI();
        conn.deleteFetch('user/' + this.id, "")
        .then(data => {
        });
    }  
  }

  save(form, key, id) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        // pick the proper record based on primary key
        const item = newData[index];
        // Bugfix: preprocess date,time,boolean values to render properly on save
        // const dateFormatted = row.date.format("DD.MM.YYYY");
        // const timeFormatted = row.time.format("HH:mm");
        // const booleanToString = row.freeclick.toString();
        // const campToEuro = `€ ${row.camp_cpc}`;
        // row.date = dateFormatted;
        // row.time = timeFormatted;
        // row.freeclick = booleanToString;
        // row.camp_cpc = campToEuro;
        newData.splice(index, 1, {
          ...item,
          ...row
        });
        this.setState({ data: newData, editingKey: "" });
        var conn = new ConnectAPI();
        conn.postFetch('user/' + id, row)
        .then(data => {
        });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: "" });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: "" });
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => {
          const checkInput = index => {
            switch (index) {
              case "No":
                return "number";
              case "First Name":
                return "text";
              case "Last Name":
                return "text";
              case "email":
                return "text";
              case "password":
                return "text";
              case "roles":
                return "text";
              default:
                return "text";
            }
          };
          return {
            record,
            // inputType: col.dataIndex === "age" ? "number" : "text",
            inputType: checkInput(col.dataIndex),
            dataIndex: col.dataIndex,
            title: col.title,
            editing: this.isEditing(record)
          };
        }
      };
    });
    
    return (
      <div>
        <Table
          components={components}
          bordered
          dataSource={this.state.data}
          columns={columns}
          rowClassName="editable-row"
        />
        <ConfirmationPopup
            ref={this.confirmationDialog}
            onConfirm={(res) => this.deleteUser(res)}
            alerttext="Are you sure you want to delete this user?"
        />
      </div>
    );
  }
}
