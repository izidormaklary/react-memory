let i=-3
const Leaderboard = ({users}) => {
function countPoints(user){
    let pointsTime = Math.round(Math.pow((1.4-user.time)*100, 2));
    let pointsClicks = (user.clicks-40)*100;
    return pointsTime+pointsClicks;
}
    return (
       <div className="Leaderboard">
           <table className="LeaderBTable">
               <tr>
                   <th>
                       Rank
                   </th>
                   <th>
                       Name
                   </th>
                   <th>
                       Time
                   </th>
                   <th>
                       Clicks
                   </th>
                   <th>
                       Points
                   </th>
               </tr>
               {users.sort(function (x,y) {
                   return countPoints(y)- countPoints(x)
                   }
               ).map((user) =>
               <tr>
                   <td>{i++}</td>
                   <td>{user.name}</td>
                   <td>{user.time}</td>
                   <td>{user.clicks}</td>
                   <td>{countPoints(user)}</td>
               </tr>
               )
               }
           </table>
       </div>
    );
}


export default Leaderboard;
