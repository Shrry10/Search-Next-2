import {nameList} from "../../users/Information"

export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Next.js!' , userList: nameList})
}