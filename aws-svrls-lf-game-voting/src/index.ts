export async function handler(event: any) {
    console.log("Hello, World");
    return "Hello, World";
}

interface GameVoting{
    gameId: string;
    customerId: string;
    votes: string;
    logTimestamp: string;
}