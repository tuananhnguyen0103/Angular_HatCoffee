/*
    Interface là để hứng dữ liệu từ api trả về
    File này hứng là hứng dữ liệu của User đăng nhập vào hệ thống
*/
export class LoginUser{
    constructor(
        access_token: string, 
        staff_id: string, 
        staff_email: string, 
        Name: string, 
        Avatar: string, 
        Address: string,
        PhoneNumber: string
        ) {
        this.access_token = access_token;
        this.staff_id = staff_id;
        this.staff_email = staff_email;
        this.Name = Name;
        this.Avatar = Avatar;
        this.Address = Address;
        this.PhoneNumber = PhoneNumber;
    }

    public access_token: string
    public staff_id: string;
    public staff_email: string;
    public Name: string;
    public Avatar: string;
    public Address: string;
    public PhoneNumber: string;
}