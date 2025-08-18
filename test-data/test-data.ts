export type User = {
    userType: string;
    userName: string;
    password: string;
}

export type TestData = {
    users: User[]
}

export const testData: TestData = {
    users: [
        {
            userType: 'Default User',
            userName: 'ian.kim',
            password: 'Password12'
        },
    ]
}