/**
 *  header-menu and sidebar menu data
 */

/* eslint-disable */
export default [
   {
      "menu_title": "menu.Home",
      "path": "/",
      "icon": "home",
      "class": "white_bg"
   },
   {
      "menu_title": "menu.pc",
      "type": "subMenu",
      "path": "javascript:void(0)",
      "icon": "pages",
      "class": "white_bg",
      "child_routes": [
         {
            "path": "/shop/home",
            "menu_title": "menu.pc.home",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/gaming",
            "menu_title": "menu.pc.game",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/workstation",
            "menu_title": "menu.pc.workstation",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom",
            "menu_title": "menu.pc.custom",
            "icon": "arrow_right_alt",
            "child_routes": null
         }
      ]
   },
   {
      "menu_title": "menu.component",
      "type": "subMenu",
      "path": "javascript:void(0)",
      "icon": "pages",
      "class": "white_bg",
      "child_routes": [
         {
            "path": "/shop/custom/cpu",
            "menu_title": "menu.component.cpu",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/cooling",
            "menu_title": "menu.component.cooling",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/motherboard",
            "menu_title": "menu.component.motherboard",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/power_supply",
            "menu_title": "menu.component.power_supply",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/ram",
            "menu_title": "menu.component.ram",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/storage_drive",
            "menu_title": "menu.component.storage_drive",
            "icon": "arrow_right_alt",
            "child_routes": null
         },
         {
            "path": "/shop/custom/video_card",
            "menu_title": "menu.component.video_card",
            "icon": "arrow_right_alt",
            "child_routes": null
         }
      ]
   },
   {
      "menu_title": "menu.cart",
      "type": "null",
      "path": "/cart/current",
      "icon": "party_mode",
      "child_routes": null,
      "class": "white_bg"
   },
   {
      "menu_title": "menu.adminPanel",
      "path": "/admin-panel/admin",
      "icon": "perm_identity",
      "child_routes": null,
      "class": "red_bg"
   }
]
