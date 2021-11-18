export class Menu{
    public static menus = [
        // {
        //     name: "Dashboard",
        //     icon: "fas fa-fw fa-tachometer-alt",
        //     route: "/main/home"
        // },
        {
            name: "Quản lý danh mục",
            icon: "fas fa-cookie-bite",
            route: "/main/category/index",
            children:[
                {
                    name: "Hiện thị danh mục",
                    route: "/main/category/index",
                },
                {
                    name: "Thêm danh mục",
                    route: "/main/category/create",
                },
                {
                    name: "Cập nhật danh mục",
                    route: "/main/category/index",
                },
            ]
        },  
        {
            name: "Quản lý sản phẩm",
            icon: "fas fa-coffee",
            route: "/main/product/index",
            children:[
                {
                    name: "Hiện thị sản phẩm",
                    route: "/main/product/index",
                },
                {
                    name: "Thêm sản phẩm",
                    route: "/main/product/create",
                },
            ]
        }
    ]
}