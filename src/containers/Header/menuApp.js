export const adminMenu = [
    { //Quản lý user
        name: 'menu.admin.manage-user',
        menus: [
            {
                name: 'menu.admin.manage-admin', link: '/system/user-admin'
                // subMenus: [
                //     { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.crud-user', link: '/system/user-manage'

            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'

            },
        ]
    },
    { //Quản lý projects
        name: 'menu.admin.project', menus: [
            {
                name: 'menu.admin.manage-project', link: '/system/manage-project'

            },
        ]
    },
];