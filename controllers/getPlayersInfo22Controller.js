import pkg from "duckdb";
const {Database} = pkg
const db = new Database(":memory:");

export async function getPlayersInfo22(req, res) {
    try {
        const rows = await new Promise((resolve, reject) =>{
            const connection = db.connect();
            connection.run(
                `
                CREATE TABLE IF NOT EXISTS Players_Data AS SELECT * From read_parquet('Parquet/Players_Data_22.parquet')
                `,
                (err) => {
                    if(err){
                        console.error("Error in reading playersinfo Parquet",err);
                        return reject(err);
                    }
                    connection.all(`SELECT CAST(pd.Name AS STRING) AS name , CAST(pd.ID AS STRING) AS ID, CAST(pd.Age AS STRING) AS age, CAST(pd.Photo AS STRING) AS photo, CAST(pd.Nationality AS STRING) AS nationality, CAST(pd.Flag AS STRING) AS flag, CAST(pd.Club AS STRING)  AS club, CAST(pd.Height AS STRING) AS height, CAST(pd.Weight AS STRING)  AS weight, CAST(pd."Jersey Number" AS STRING)  AS jerseyNumber, CAST(pd.SprintSpeed AS STRING)  AS sprintSpeed, CAST(pd.Stamina AS STRING)  AS stamina, CAST(pd.ShotPower AS STRING)  AS shotPower, CAST(pd.Volleys AS STRING)  AS volleys, CAST(pd.Jumping AS STRING)  AS jumping, CAST(pd.Balance AS STRING)  AS balance, CAST(pd.Agility AS STRING)  AS agility, CAST(pd.Joined AS STRING)  AS joined, FROM Players_Data pd LIMIT 10`, (err, rows) => {
                        if(err){
                            console.error("Error in querying players Data");
                            return reject(err);
                        }
                        resolve(rows)
                        
                    })
                }
            )
        });
        res.json(rows)
    } catch (error) {
        console.error("Error in querying player_data",error);
        res.status(500).json({error:"Failed to fetch playersData"});
    }
}