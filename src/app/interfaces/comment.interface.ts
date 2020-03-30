export interface CommentInterface {
    id: number,
    postId: number,
    parent_id: string,
    user: string,
    date: string,
    content: string
}