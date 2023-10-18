import { Callback, Context } from 'aws-lambda';
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, PutCommand } from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export async function handler(event: any, context: Context, callback: Callback) {
    console.log("event", event);
    
    // create GameVoting type object from event body
    const item: GameVoting = event;
    item.id = item.gameId + item.customerId + item.logTimestamp;
    console.log("item ", item);

    // Create DynamoDB PutCommand
    const command = new PutCommand({
        TableName: "game-customer-voting",
        Item: item
    });

    const response = await docClient.send(command);
    console.log("response", response);
    return response;
}

interface GameVoting {
    id: string;
    gameId: string;
    customerId: string;
    votes: string;
    logTimestamp: string;
}