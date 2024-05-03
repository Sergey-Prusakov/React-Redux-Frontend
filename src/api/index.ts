import axios from 'axios';

type IRequestType = 'get' | 'post' | 'patch' | 'delete'

async function makeRequest(requestType: IRequestType, requestUrl: string, requestData: object) {
    console.log(requestType);
    console.log(requestUrl);
    console.log(requestData);

    let data = {};
    if (requestData) {
        await axios[requestType](requestUrl, requestData, {
        }).then(res => { data = res.data }).catch(err => {
            console.log(err);
        });
    } else {
        await axios[requestType](requestUrl, {
        }).then(res => { data = res.data }).catch(err => {
            console.log(err);
        });
    }

    console.log(data);

    return data;
}

export async function getItemsInfo() {
    return makeRequest('get', 'http://localhost:8000/food/getAllFood', {})
}