import { Typography } from "@mui/material"
import React, { useState } from "react"
import { SearchBox } from "../../components"
import { useStyles } from "./styles"

export const SearchFunc = () => {
    const classes = useStyles()
    const data = ["idea", "active", "test", "goal"]
    const [filterdData, setFilteredData] = useState([])
    const [isSearch, setIsSearch] = useState(false)
    const [value, setValue] = useState("")

    const searchFilter = (value) => {
        if (value !== "") {
            setIsSearch(true)
            const newData = data.filter((x) => x.includes(value))
            setFilteredData(newData)
        }
        else {
            setFilteredData([])
            setIsSearch(false)

        }

    }
    const selectValue = (selectedvalue) => {
        setValue(selectedvalue)
    }
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
            <div>
                <SearchBox
                    onChange={(e) => searchFilter(e.target.value)}
                    value={value}
                />
                {isSearch === true &&
                    <div className={`${classes.optionBox}`}>
                        {filterdData?.length > 0 ? filterdData.map((d) =>
                            <Typography onClick={() => selectValue(d)} className={`${classes.options}`}>{d}</Typography>
                        )
                            :
                            <Typography>No Data Found</Typography>

                        }
                    </div>
                }
            </div>
        </div>
    )
}