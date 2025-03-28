
import ItemIcon from '../../assets/imports/analysis-item.png'
import ItemIconSelect from '../../assets/imports/analysis-selected-item.png'
import React from 'react'

const AnalysisBreakdown = () => {
    return (
        <div className="analysis__info--breakdown">
                    <div className="analysis__info--breakdown--title">
                        <h5>Race</h5>
                        <h5>A.I. Confidence</h5>
                    </div>

                    <div className="analysis__info--breakdown--item analysis__info--breakdown--item--selected">
                        <h5>
                            <img src={ItemIconSelect} alt="" />
                            White</h5>
                        <h5>100 %</h5>
                    </div>
                    {
                        new Array(5).fill(0).map((_, i) => (
                            <div className="analysis__info--breakdown--item" key={i}>
                                <h5>
                                    <img src={ItemIcon} alt="" />
                                    White</h5>
                                <h5>100 %</h5>
                            </div>
                        ))
                    }
                </div>
    )
}

export default AnalysisBreakdown
