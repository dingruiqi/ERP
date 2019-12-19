import { Department } from './department';
import { Role } from './role';
import { Right } from './right';

export class User {
    userID: number;
    //登录名字
    loginName: string;
    //password: string;//要保存在localstorage，所以不存密码
    userName: string;
    //手机号
    mobileNum: string;
    email: string;
    createTime: Date;
    //上次登录时间
    lastLoginTime: Date;
    //当前登录时间
    currentLoginTime: Date;
    //登录次数
    loginCount: number;
    department: Department;
    Roles: Array<Role>;
    Rights: Array<Right>;

    constructor() {
        this.department = new Department();
        this.Roles = new Array<Role>();
        this.Rights = new Array<Right>();
    }
}
