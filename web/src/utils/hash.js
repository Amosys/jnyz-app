import * as bcrypt from 'bcryptjs';

export default {
    async encryptPassword(password) {
        //const salt = await bcrypt.genSalt(10); // 生成salt值
        console.log(password)
        return await bcrypt.hash(password, 10); // 返回经过加密后的密码字符串
    },
    
    comparePasswords(inputPassword, storedPasswordHash) {
        return bcrypt.compareSync(inputPassword, storedPasswordHash); // 比较输入密码与存储的密码哈希值
    }
}