import React from 'react'
import { connect } from 'react-redux'
import { WORD_RELATION_TYPES } from 'modules/Game/constants'
import Center from 'modules/shared/Center'
import { resampleGoldStandard } from './reducer'

const GoldStandardComponent = ({ sampleGoldStandards, isLoading, resample }) => !isLoading ? (
    <div className="d-flex flex-column">
        <div>{
            sampleGoldStandards.map(
                ({ lhsWord, rhsWord, wordRelationType }, i) =>
                    <Center className="m-2" key={i}>
                        {lhsWord} {Object.values(WORD_RELATION_TYPES).filter(wrt => wrt.id == wordRelationType.id)[0].symbol} {rhsWord}
                    </Center>
            )
        }</div>
        <button className="btn btn-sm btn-outline-success m-2" onClick={resample}>Clue lain</button>
    </div>
) : <span>loading...</span>

const mapStateToProps = (state) => ({
    isLoading: state.goldStandardState.isLoading,
    sampleGoldStandards: state.goldStandardState.sampleGoldStandards,
})

const mapDispatchToProps = (dispatch) => ({
    resample: () => dispatch(resampleGoldStandard())
})

const GoldStandard = connect(mapStateToProps, mapDispatchToProps)(GoldStandardComponent)

export default GoldStandard
