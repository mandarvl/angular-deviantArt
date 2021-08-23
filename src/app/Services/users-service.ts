export class usersService{
    users = [
        {
          id: 1,
          name : 'Ak Akshan',
          imgpath: '../../assets/img/pdp2.jpg'
        },
        {
          id: 2,
          name : 'Dead-Urox',
          imgpath: '../../assets/img/pdp7.png'
        },
        {
          id: 3,
          name : 'TheUltimate',
          imgpath: '../../assets/img/pdp3.jpg'
        },
        {
          id: 4,
          name : 'Crysta',
          imgpath: '../../assets/img/pdp4.jpg'
        },
        {
          id: 5,
          name : 'TinoHarilala',
          imgpath: '../../assets/img/pdp5.jpg'
        },
        {
          id: 6,
          name : 'Ghost',
          imgpath: '../../assets/img/pdp6.jpg'
        }
      ];
      GetUserById(id : number){
        const user = this.users.find(
            (user) => {
              return user.id === id
            }
          );
          return user;
      }
}