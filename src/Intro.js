import React, { Fragment, useState } from 'react'
import { EuiButtonEmpty, EuiCheckbox, EuiRadioGroup,EuiSpacer,EuiButton,EuiFlexGroup, EuiText, EuiFlexItem } from '@elastic/eui'
import InstructionHeader from './InstructionHeader'
import InstructionBody from './InstructionBody'
import ImmuneSystemInstructions from './ImmuneSystemInstructions'
import '@elastic/eui/dist/eui_theme_light.min.css'

const Intro = () => {
  const [showInstruction, setShowInstruction] = useState(true)
  const [showQuestions, setShowQuestions] = useState(false)
  const [selectedTemperatureId, setSelectedTemperatureId] = useState(null)
  const [selectedCoughingFrequencyId, setSelectedCoughingFrequencyId] = useState(null)
  const [selectedBreathingTroublesId, setSelectedBreathingTroublesId] = useState(null)
  const [selectedGeneralEnergyId, setSelectedGeneralEnergyId] = useState(null)
  const [selectedNearbyAffectedPeopleId, setSelectedNearbyAffectedPeopleId] = useState(null)
  const [selectedImmuneSystemConditionId, setSelectedImmuneSystemConditionId] = useState(null)
  const [selectedAgeGroupId, setSelectedAgeGroupIdId] = useState(null)
  const [currentStep, setCurrentStep] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const [statusHighBloodPressure, setStatusHighBloodPressure] = useState(false)
  const [statusHeartDisease, setStatusHeartDisease] = useState(false)
  const [statusLungsDisease, setStatusLungsDisease] = useState(false)
  const [statusCancer, setStatusCancer] = useState(false)
  const [statusDiabetis, setStatusDiabetis] = useState(false)
  const [statusNoPriorCase, setStatusNoPriorCase] = useState(false)
  const [currentScore, setCurrentScore] = useState(0)

  const listOfTemperatures = [
    {
      content: "33° সেলসিয়াস (91.4° ফারেনহাইট) এর চেয়ে কম",
      score: 0
    }, {
      content: "38° - 39.4° সেলসিয়াস (100.4°- 102.2° ফারেনহাইট)",
      score: 4
    }, {
      content: "39.5° সেলসিয়াস ( 102.2° ফারেনহাইট) এর চেয়ে বেশি",
      score: 10
    }
  ]
  
  const listOfCoughingFrequencies = [
    {
      content: "না",
      score: 0
    }, {
      content: "মাঝে মাঝে",
      score: 1
    }, {
      content: "প্রায় সময়ই",
      score: 3
    }, {
      content: "প্রায় সব সময়ই",
      score: 7
    }
  ]

  const listOfBreathingTroubles = [
    {
      content: "না",
      score: 0
    }, {
      content: "কম",
      score: 2
    }, {
      content: "হ্যা, মাঝে মাঝে",
      id: "qBreathingTrouble.aYesModerate",
      score: 7
    }, {
      content: "হ্যা, প্রায় সবসময়ই",
      score: 10
    }]
  
  
  const listOfGeneralEnergy = [{
    content: "অন্য সব সময়ের মত",
    score: 0
  }, {
    content: "দুর্বল মনে হয়",
    score: 1
  }, {
    content: "মোটামুটি শয্যায়ায়ী",
    score: 4
  }, {
    content: "অনেকটা শয্যায়ায়ী",
    score: 7
  }, {
    content: "পুরোপুরি শয্যায়ায়ী",
    score: 10
  }]

  const listOfNearbyAffectedPeople = [{
    content: "না",
    score: 0
  }, {
    content: "হ্যা",
    score: 2
  }]
  
  const listOfImmuneSystem = [{
    content: "না",
    score: 0
  }, {
    content: "হ্যা",
    score: 15
  }]
  
  
  const listOfAgeGroup = [{
    content: "৬০ এর কম",
    score: 0
  }, {
    content: "৬০ থেকে ৬৯ এর মাঝামাঝি",
    score: 4
  }, {
    content: "৭০ থেকে ৭৯ এর মাঝামাঝি",
    score: 7
  }, {
    content: "৮০ বা তার চেয়েও বেশি",
    score: 10
  }]



  const questions = [
    "আপনার শরীরের তাপমাত্রা কত?",
    "সম্প্রতি কি কাশি হচ্ছে?",
    "আপনার কি শ্বাসকষ্ট হচ্ছে?",
    "দুর্বলতা অনুভব করছেন?",
    "করোনাভাইরাস (কোভিড-১৯) এ আক্রান্ত বা ঝুঁকির মধ্যে আছে আপনার ঘনিষ্ঠ এমন কেউ আছে?",
    "এই অসুখগুলোর কোনটা কী আপনি চিকিৎসাধীন? একাধিক উত্তরে টিক চিহ্ন দিতে পারেন",
    "আপনার ইমিউন সিস্টেম(রোগ প্রতিরোধ ব্যবস্থা) কী কম ?",
    "আপনার বয়স কত?",
    "ফলাফল"
  ]

  const start = () => {
    setShowInstruction(false)
    setShowQuestions(true)
    setCurrentStep(1)
  }

  const back = () => {
    setCurrentStep(currentStep - 1)
    
    // setCurrentScore(0)
    if (currentStep === 1) {
      setShowInstruction(true)
      setShowQuestions(false)
    }
  }

  const next = () => {
    setCurrentStep(currentStep+1)
    setTotalScore(totalScore+currentScore)
    setCurrentScore(0)
  }

  const temperatureOptions = [
      {
        id: '0',
        label: listOfTemperatures[0].content
      },
      {
        id: '1',
        label: listOfTemperatures[1].content
      },
      {
        id: '2',
        label: listOfTemperatures[2].content
      }
    ]
    
  const coughOptions = [
      {
        id: '3',
        label: listOfCoughingFrequencies[0].content
      },
      {
        id: '4',
        label: listOfCoughingFrequencies[1].content
      },
      {
        id: '5',
        label: listOfCoughingFrequencies[2].content
      }, {
        id: '6',
        label: listOfCoughingFrequencies[3].content
      }
    ]

  const breathingTroublesOptions = [
    {
      id: '7',
      label: listOfBreathingTroubles[0].content
    },
    {
      id: '8',
      label: listOfBreathingTroubles[1].content
    },
    {
      id: '9',
      label: listOfBreathingTroubles[2].content
    }, {
      id: '10',
      label: listOfBreathingTroubles[3].content
    }
  ]

  const generalEnergyOptions = [
    {
      id: '11',
      label: listOfGeneralEnergy[0].content
    },
    {
      id: '12',
      label: listOfGeneralEnergy[1].content
    },
    {
      id: '13',
      label: listOfGeneralEnergy[2].content
    }, {
      id: '14',
      label: listOfGeneralEnergy[3].content
    }]


  const nearbyAffectedPeopleOptions = [
    {
      id: '15',
      label: listOfNearbyAffectedPeople[0].content
    },{
      id: '16',
      label: listOfNearbyAffectedPeople[1].content
    }
  ]
  
  const immuneSystemOptions = [
    {
      id: '17',
      label: listOfImmuneSystem[0].content
    }, {
      id: '18',
      label: listOfImmuneSystem[1].content
    }
  ]
  
  const  ageGroupOptions = [
    {
      id: '19',
      label: listOfAgeGroup[0].content
    }, {
      id: '20',
      label: listOfAgeGroup[1].content
    }, {
      id: '21',
      label: listOfAgeGroup[2].content
    }, {
      id: '22',
      label: listOfAgeGroup[3].content
    }
  ]

  const onChangeTemperature = (id) => {
    setSelectedTemperatureId(id)
    setCurrentScore(listOfTemperatures[id].score)
  }
  
  const onChangeCoughingFrequency = (id) => {
    setSelectedCoughingFrequencyId(id)
    setCurrentScore(listOfCoughingFrequencies[id - 3].score)
  }
  
  const onChangeBreathingTroubles = (id) => {
    setSelectedBreathingTroublesId(id)
    setCurrentScore(listOfBreathingTroubles[id - 7].score)
  }
  
  const onChangeGeneralEnergy = (id) => {
    setSelectedGeneralEnergyId(id)
    setCurrentScore(listOfGeneralEnergy[id - 11].score)
  }
  
  const onChangeNearbyAffectedPeople = (id) => {
    setSelectedNearbyAffectedPeopleId(id)
    setCurrentScore(listOfNearbyAffectedPeople[id - 15].score)
  }
  
  const onChangeImmuneSystemCondition = (id) => {
    setSelectedImmuneSystemConditionId(id)
    setCurrentScore(listOfImmuneSystem[id - 17].score)
  }
  
  const onChangeAgeGroup = (id) => {
    setSelectedAgeGroupIdId(id)
    setCurrentScore(listOfAgeGroup[id - 19].score)
  }


  const onChangeBloodPressure = (e) => {
    setStatusHighBloodPressure(e.target.checked)
    setStatusNoPriorCase(false)
    if (e.target.checked) {
      setTotalScore(totalScore+2)
    } else {
      setTotalScore(totalScore - 2)
    }
  }
  
  const onChangeHeartDisease = (e) => {
    setStatusHeartDisease(e.target.checked)
    setStatusNoPriorCase(false)
    if (e.target.checked) {
      setTotalScore(totalScore + 5)
    } else {
      setTotalScore(totalScore - 5)
    }
  }
  
  const onChangeLungsDisease = (e) => {
    setStatusLungsDisease(e.target.checked)
    setStatusNoPriorCase(false)
    if (e.target.checked) {
      setTotalScore(totalScore + 8)
    } else {
      setTotalScore(totalScore - 8)
    }
  }

  const onChangeCancer = (e) => {
    setStatusCancer(e.target.checked)
    setStatusNoPriorCase(false)
    if (e.target.checked) {
      setTotalScore(totalScore + 5)
    } else {
      setTotalScore(totalScore - 5)
    }
  }

  const onChangeDiabetis = (e) => {
    setStatusDiabetis(e.target.checked)
    setStatusNoPriorCase(false)
    if (e.target.checked) {
      setTotalScore(totalScore + 5)
    } else {
      setTotalScore(totalScore - 5)
    }
  }

  const onChangeNoPriorCase = (e) => {
    setStatusNoPriorCase(e.target.checked)
    if (e.target.checked) {
      let toBeDeducted = 0
      if (statusHighBloodPressure === true) {
        toBeDeducted += 2
        setStatusHighBloodPressure(false)
      }
      if (statusHeartDisease === true) {
        toBeDeducted += 5
        setStatusHeartDisease(false)
      }
      if (statusLungsDisease === true) {
        toBeDeducted += 8
        setStatusLungsDisease(false)
      }
      if (statusCancer === true) {
        toBeDeducted += 5
        setStatusCancer(false)
      }
      if (statusDiabetis === true) {
        toBeDeducted += 5
        setStatusDiabetis(false)
      }  
      setTotalScore(totalScore - toBeDeducted)    
    }
  }



  return (<Fragment>
    <EuiText><h6 style={{color: 'white'}}>Score: {totalScore}</h6></EuiText>
    <div style={{display: showInstruction ? 'block':'none'}}>
      <InstructionHeader />
      <EuiFlexGroup style={{marginLeft: "10vw", marginRight: "10vw"}}>
        <EuiFlexItem>
          <InstructionBody />
          <EuiSpacer size="l" />
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty style={{ textAlign: "center", fontSize: "1.6em" }} onClick={start}>
              এখান থেকে শুরু করুন 
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
    <div style={{ display: showQuestions ? 'block' : 'none' }}>
      <EuiSpacer size="xl" />
      <EuiText>
        <h1 style={{ textAlign: "center" }}>
          {questions[currentStep-1]}
        </h1>
      </EuiText>
      <EuiSpacer size="l" />
      
      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep===1? 'flex':'none'}}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={temperatureOptions}
            idSelected={selectedTemperatureId}
            onChange={onChangeTemperature}
            name="radiogroup1"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep===1? 'flex':'none', marginLeft: '20vw'}}>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
            আগের ধাপে ফেরত যান
          </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} 
            isDisabled={selectedTemperatureId===null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 2 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={coughOptions}
            idSelected={selectedCoughingFrequencyId}
            onChange={onChangeCoughingFrequency}
            name="radiogroup2"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 2 ? 'flex' : 'none', marginLeft: '20vw' }}>
      <EuiFlexItem grow={false}>
        <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
          আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedCoughingFrequencyId === null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
    
    
    
    
      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 3 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={breathingTroublesOptions}
            idSelected={selectedBreathingTroublesId}
            onChange={onChangeBreathingTroubles}
            name="radiogroup3"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 3 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
        <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
          আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedBreathingTroublesId === null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>
      
      
      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 4 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={generalEnergyOptions}
            idSelected={selectedGeneralEnergyId}
            onChange={onChangeGeneralEnergy}
            name="radiogroup4"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 4 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
        <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
          আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedGeneralEnergyId === null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
      </EuiFlexItem>
    </EuiFlexGroup>


      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 5 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={nearbyAffectedPeopleOptions}
            idSelected={selectedNearbyAffectedPeopleId}
            onChange={onChangeNearbyAffectedPeople}
            name="radiogroup5"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 5 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
            আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedNearbyAffectedPeopleId === null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 6 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiCheckbox
            id='23'
            label="উচ্চ রক্তচাপ"
            checked={statusHighBloodPressure}
            onChange={onChangeBloodPressure}
          />
          <EuiCheckbox
            id='24'
            label="হৃদরোগ"
            checked={statusHeartDisease}
            onChange={onChangeHeartDisease}
          />
          <EuiCheckbox
            id='25'
            label="ফুসফুসে সমস্যা"
            checked={statusLungsDisease}
            onChange={onChangeLungsDisease}
          />
          
          <EuiCheckbox
            id='26'
            label="ক্যান্সার"
            checked={statusCancer}
            onChange={onChangeCancer}
          />
          
          <EuiCheckbox
            id='27'
            label="ডায়াবেটিস"
            checked={statusDiabetis}
            onChange={onChangeDiabetis}
          />
          <EuiCheckbox
            id='28'
            label="কোনটাই না"
            checked={statusNoPriorCase}
            onChange={onChangeNoPriorCase}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 6 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
            আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={
              !statusHighBloodPressure
              && !statusHeartDisease
              && !statusLungsDisease
              && !statusCancer
              && !statusDiabetis
              && !statusNoPriorCase
            }
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 7 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <ImmuneSystemInstructions />
          <EuiRadioGroup
            options={immuneSystemOptions}
            idSelected={selectedImmuneSystemConditionId}
            onChange={onChangeImmuneSystemCondition}
            name="radiogroup6"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 7 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
            আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedImmuneSystemConditionId === null}
            onClick={next}>
            পরের ধাপে যান
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>



      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 8 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiRadioGroup
            options={ageGroupOptions}
            idSelected={selectedAgeGroupId}
            onChange={onChangeAgeGroup}
            name="radiogroup7"
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ padding: "10px", display: currentStep === 8 ? 'flex' : 'none', marginLeft: '20vw' }}>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }} onClick={back}>
            আগের ধাপে ফেরত যান
        </EuiButton>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiButton style={{ textAlign: "center", fontSize: "1.6em" }}
            isDisabled={selectedAgeGroupId === null}
            onClick={next}>
            শেষ করুন
          </EuiButton>
        </EuiFlexItem>
      </EuiFlexGroup>
      

      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 9 ? 'flex' : 'none' }}>
        <EuiFlexItem style={{display: totalScore>= 16? 'flex':'none'}}>
          <EuiText>
            <h2>
            টেলিফোনের পরামর্শের জন্য আপনার 1177 (শুধু সুইডেনের জন্য প্রযোজ্য) নাম্বারে কল করা উচিত। এখনই এটি দীর্ঘ সারি হতে পারে।
            </h2>
            <h2>
              আপনার যদি শ্বাসকষ্টের গুরুতর সমস্যা হয় তবে 112 (শুধু সুইডেনের জন্য প্রযোজ্য) এ যোগাযোগ করুন।
            </h2>
          </EuiText>
        </EuiFlexItem>
        <EuiFlexItem style={{display: totalScore< 16? 'flex':'none'}}>
          <EuiText>
          <h2>
            আপনি নিজের যত্ন নিজে নিতে পারবেন।
          </h2>
          <h2>
            আপনি যদি উদ্বিগ্ন হন তবে আপনি 1177 (শুধু সুইডেনের জন্য প্রযোজ্য) নাম্বারে যোগাযোগ করুন।
          </h2>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiFlexGroup style={{ marginLeft: "10vw", marginRight: "10vw", display: currentStep === 9 ? 'flex' : 'none' }}>
        <EuiFlexItem>
          <EuiSpacer size="l" />
          <EuiFlexItem grow={false}>
            <EuiButtonEmpty style={{ textAlign: "center", fontSize: "1.6em" }} onClick={() => {
              window.location.replace('/')
            }}>
              নতুন নীরিক্ষা শুরু করুন
            </EuiButtonEmpty>
          </EuiFlexItem>
        </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  </Fragment>)
}

export default Intro
