import { Callback, Context } from 'aws-lambda';

export async function handler(event: any, context: Context, callback: Callback) {
    console.log("event", event);
    const item: GameVoting = event;
    console.log("item ", item);
    return "Hello, World";
}

interface GameVoting {
    gameId: string;
    customerId: string;
    votes: string;
    logTimestamp: string;
}