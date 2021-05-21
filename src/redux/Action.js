export const userdata = (data) => {
    console.log('Actionn', data);
    return {
        type: "USER_STORE",
        payload: data
    }
} 