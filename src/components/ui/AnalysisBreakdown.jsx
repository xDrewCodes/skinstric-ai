
import ItemIcon from '../../assets/imports/analysis-item.png'
import ItemIconSelect from '../../assets/imports/analysis-selected-item.png'
import React, { useState } from 'react'

const AnalysisBreakdown = ({ demo, weights, currents }) => {

    const [selected, setSelected] = useState(currents)

    function changeSelection(item) {

        let newSelection = { ...selected }
        newSelection[demo] = item
        setSelected(newSelection)
    }


    return (
        <div className="analysis__info--breakdown">
            <div className="analysis__info--breakdown--title">
                <h5>{demo}</h5>
                <h5>A.I. Confidence</h5>
            </div>

            { currents && weights &&
                weights[demo].map((item, i) => (
                    item[0] !== selected[demo]
                    ?
                    <div
                    onClick={() => changeSelection(item[0])}
                    className="analysis__info--breakdown--item"
                    key={i}>
                        <h5>
                            <img src={ItemIcon} alt="" />
                            {item[0]}
                        </h5>
                        <h5>
                            {item[1]}{' '}
                            %
                        </h5>
                    </div>
                    :
                    <div className="analysis__info--breakdown--item analysis__info--breakdown--item--selected" key={i}>
                        <h5>
                            <img src={ItemIconSelect} alt="" />
                            {item[0]}
                        </h5>
                        <h5>
                            {item[1]}{' '}
                            %
                        </h5>
                    </div>
                ))
            }
        </div>
    )
}

export default AnalysisBreakdown
