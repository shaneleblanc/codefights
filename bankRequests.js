// You've been asked to program a bot for a popular bank that will automate the management of incoming requests. There are three types of requests the bank can receive:

// transfer i j sum: request to transfer sum amount of money from the ith account to the jth one;
// deposit i sum: request to deposit sum amount of money in the ith account;
// withdraw i sum: request to withdraw sum amount of money from the ith account.
// Your bot should also be able to process invalid requests. There are two types of invalid requests:

// invalid account number in the requests;
// deposit / withdrawal of a larger amount of money than is currently available.
// For the given list of accounts and requests, return the state of accounts after all requests have been processed, or an array of a single element [-<request_id>] (please note the minus sign), where <request_id> is the 1-based index of the first invalid request.
function bankRequests(accounts, requests) {

    for(var i in requests){
        var r = requests[i].split(' ');

        if(parseInt(r[1]-1) >= accounts.length) return [i - (i*2)-1] || [-1];
        switch (r[0]){
            case "withdraw": 
                        r[1] = parseInt(r[1]) -1;
                        r[2] = parseInt(r[2]);
                if(r[2] > accounts[r[1]]) return [i - (i*2)-1];
                accounts[r[1]] = parseInt(accounts[r[1]]) - parseInt(r[2]);
            break;
            case "deposit":
                        r[1] = parseInt(r[1]) -1;
                        r[2] = parseInt(r[2]);
                accounts[r[1]] = parseInt(accounts[r[1]]) + parseInt(r[2]);
            break;
            case "transfer":
                        r[1] = parseInt(r[1]) -1;
                        r[2] = parseInt(r[2]) -1;
                        r[3] = parseInt(r[3]);
                if(r[3] > accounts[r[1]] || parseInt(r[2]) >= accounts.length || parseInt(r[1]) >= accounts.length) return [i - (i*2)-1];
                accounts[r[1]] = parseInt(accounts[r[1]]) - parseInt(r[3]);
                accounts[r[2]] = parseInt(accounts[r[2]]) + parseInt(r[3]);
            break;
            default: return i-1 - ((i-1)*2);
        }
    }
    return accounts;
}
