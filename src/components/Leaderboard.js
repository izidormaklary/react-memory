
const Leaderboard = ({users}) => {
    let i = 1;
    function countPoints(user) {
        let pointsTime = Math.round(Math.pow((1.4 - user.time) * 100, 2));
        let pointsClicks = (40 - user.clicks) * 100;
        return pointsTime + pointsClicks;
    }

    return (
        <div className="Leaderboard">
            <table className="LeaderBTable">
                <thead>
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
                </thead>
                <tbody>
                {users ? users.sort(function (x, y) {
                        return countPoints(y) - countPoints(x)
                    }
                ).map((user) =>

                    <tr key={user.name + i} >
                        <td>{i++}</td>
                        <td>{user.name}</td>
                        <td>{user.time}</td>
                        <td>{user.clicks}</td>
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
