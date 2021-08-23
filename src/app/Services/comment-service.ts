export class commentService{
    comments = [
        {
            id : 0,
            id_user : 1,
            id_post : 1,
            commentary : "its was ammazing !"
        },
        {
            id : 1,
            id_user : 2,
            id_post : 1,
            commentary : "Merci b ndray ! !"
        },
        {
            id : 1,
            id_user : 6,
            id_post : 2,
            commentary : "Merci beaucoup :) <3"
        },
        {
            id : 1,
            id_user : 5,
            id_post : 4,
            commentary : "Merci beaucoup :) <3"
        },
        {
            id : 1,
            id_user : 3,
            id_post : 4,
            commentary : "Merci beaucoup :) <3"
        }
    ]
    GetCommentByIdPost(idpost : number){
        const com = this.comments.filter(
            (obj)=>{
                return obj.id_post === idpost;
            }
        );
        return com;
    }
}