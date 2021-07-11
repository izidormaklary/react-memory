
const Leaderboard = ({users}) => {
    let i = 1;
    function countPoints(user) {
        let pointsTime = Math.round((60 - (user.time.minutes*60+user.time.seconds)) * 100);
        let pointsClicks =((50 - user.clicks) * 100);
        return pointsTime + pointsClicks;
    }

    return (
        <div className="Leaderboard">
            <table className="LeaderBTable">
                <thead>
                <tr>
                    <th colspan="5" > Leaderboard</th>
                </tr>
                <tr>
                    <th>
                        Rank
                    </th>
                    <th >
                        Name
                    </th>
                    <th className="dontShow">
                        Time
                    </th>
                    <th className="dontShow" >
                        Clicks
                    </th>
                    <th>
                        Points
                    </th>
                </tr>
                </thead>
                <tbody>
                {users ? users.sort(function (x, y) {
                        return countPoints(y) - countPoints(x)
                    }
                ).map((user) =>

                    <tr key={user.name + i} >
                        <td>{i++}</td>
                        <td>{user.name}</td>
                        <td className="dontShow">{user.time.minutes+":"+user.time.seconds}</td>
                        <td className="dontShow">{user.clicks}</td>
                        <td>{countPoints(user)}</td>
                    </tr>
                ) : ""
                }
                </tbody>
            </table>
        </div>
    );
}


export default Leaderboard;
