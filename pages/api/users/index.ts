import type { NextApiRequest, NextApiResponse } from 'next';
import { User, users } from "../../../data/users";

type Data = {
    data: User[];
} | {
    error: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json( {data: users}); 
}