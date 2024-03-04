export default interface User {
    name: string,
    email: string,
    dob: string | number | Date,
    password: string,
    id: string | number
}