// export const changeMsg = ({commit}) => {
//     commit({
//       type: 'mutationsMsg',     //对应mutation.js中的mutationsMsg方法
//       cityName :'北京'
//     });
//   };

export const changeIslogin=({commit})=>{
    commit({
        type:"MutationIslogin",
        Islogin:true
    });
}