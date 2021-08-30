export class postService{
    posts = [
        {
          id: 1,
          id_user : 1,
          title : 'Beyound good & evil - Jade',
          imgpath: '../../assets/img/photo.jpg'
        },
        {
          id: 2,
          id_user : 2,
          title : 'Manette Ps4',
          imgpath: '../../assets/img/photo3.jpg'
        },
        {
          id: 3,
          id_user : 3,
          title : 'Grrrrrr !!!!',
          imgpath: '../../assets/img/photo4.jpg'
        },
        {
          id: 4,
          id_user : 4,
          title : 'Atlantas <3',
          imgpath: '../../assets/img/photo6.jpg'
        },
        {
          id: 5,
          id_user : 5,
          title : 'Assassin scread',
          imgpath: '../../assets/img/photo5.jpg'
        },
        {
          id: 6,
          id_user : 6,
          title : 'The planet',
          imgpath: '../../assets/img/photo2.jpg'
        }
      ];
    GetPostById(id : number){
      const post = this.posts.find(
        (p)=>{
          return p.id === id;
        }
      );
      return post;
    }  
}