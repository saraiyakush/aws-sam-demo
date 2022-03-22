
function printEnvironment() {
    console.log(`Database Url: ${process.env.DATABASE_URL}`);
    console.log(`Logging level: ${process.env.LOG_LEVEL}`);
}

exports.handler = async (event) => {
    
    let responseCode = 200;
    let responseMessage = 'Invalid http method';

    printEnvironment();

    switch(event.httpMethod) {
        case 'GET':
            responseMessage = 'GET method called';
            break;
        case 'POST':
            responseCode = 201;
            responseMessage = 'POST method called';
            break;
        case 'PUT':
            responseMessage = 'PUT method called';
            break;
    }

    let response = {
        statusCode: responseCode,
        body: JSON.stringify({
            statusCode: responseCode,
            message: responseMessage,
        }),
    }

    return response;
}
