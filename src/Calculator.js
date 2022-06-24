import { useState } from 'react';
import styled from 'styled-components';
import { styled as muistyled } from '@mui/material/styles';

import { Tab, Tabs} from '@mui/material';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InputAdornment from '@mui/material/InputAdornment';

import Button from '@mui/material/Button';

import CalculateIcon from '@mui/icons-material/Calculate';


const Background = styled.section`
  height: 100vh;
  width: 100%;
  background-color: #4045C5; 
  font-family: 'Lato', sans-serif;
  overflow: hidden;
  @media (max-width: 821px) {
    height: auto;
  }
`;

const BrandWrapper = styled.div`
  width: 100%;
  padding-top: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: .5vw;
  text-align: center;
`;

const AlbieroWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1.5vh;
  font-size: 1.3rem;
  font-weight: 400;
  font-style: italic;
`;

const AlbieroText = styled.div`
  padding-left: .35vw;
`;

const TabsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 5vh;
`;

const StyledTabs = muistyled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 50,
    width: '100%',
    backgroundColor: 'white',
  },
});

const StyledTab = muistyled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.7)',
    '&.Mui-selected': {
      color: '#fff',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
  }),
);

const Display = styled.div`
  height: 70vh;
  width: 100%;
  margin-top: 5vh;
  background: linear-gradient(to top, #2D39B7, #4045C5);
  @media (max-width: 821px) {
    height: auto;
    padding-bottom: 5vh;
  }
`;

// three parts of display are volume, yield, and about. Switchable through the tabs

// Volume Display
const Volume = styled.div`
  width: 80%;
  height: 85%;
  margin: 0 auto;
  background-color: white;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: none;
  @media (max-width: 821px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: none;
  }
`;

// Yield Display
const Yield = styled.div`
  width: 80%;
  height: 85%;
  margin: 0 10%;
  border-radius: 20px;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 821px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: none;
  }
`;

// Common to Volume and Yield Displays
const Options = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PersonTypeFormControl = styled(FormControl)`
  && {
    margin-left: 3.5vw;
  }
`;

const TransfusionTypeFormControl = styled(FormControl)`
  && {
    margin-left: 3.5vw;
  }
`;

const WeightInGrams = styled.div`
  margin-top: .5vh;
  font-size: 0.85rem;
  margin-right: 2.5%;
`;

const Specs = styled.div`
  height: 100%; 
  background-color: rgba(0,0,0,0.025);
`;

const FormControlWrapper = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const CustomFormControl = styled(FormControl)`
  && {
    width: 100%;
  }
`;

const Results = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ResultsLabelAndNumber = styled.div`
  text-align: center;
  margin: 5vh 0;
  @media (max-width: 820px) {
    margin: 2.5vh 0;
  }
`;

const ResultsLabel = styled.div`
  color: black;
  font-size: 1.25rem;
`;

const ResultsNumber = styled.div`
  margin-top: 2.5vh;
  font-size: 2rem;
`;

// About Display
const About = styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 85%;
  border-radius: 20px;
  background-color: white;
  padding: 5vh 2.5vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 821px) {
      width: 80%;
      height: 100vh;
    }
`;

const AboutText = styled.div`
  line-height: 3.5vh;
`;

const ReferenceAndLink = styled.div``;

const Link = styled.a`
  padding-top: 2.5vh;
  color: #536E99;
`;

const CustomButton = styled(Button)`
  && {
    color: black;
    border-color: black;
    margin-top: 3.5vh;
    margin-bottom: 5vh;
    :hover {
      color: black;
      border-color: black;
      background-color: rgba(0,0,0,0.025);
    }
    @media (max-width: 821px) {
      margin-top: 5vh;
    }
  }
`;

export const Calculator = () => {
  const [value, setValue] = useState(0); 
  
  const [personType, setPersonType] = useState("male"); 
  const [transfusionTypeVolume, setTransfusionTypeVolume] = useState("therapeutic");
  const [transfusionTypeYield, setTransfusionTypeYield] = useState("standard");

  const [plateletCount, setPlateletCount] = useState(""); 
  const [volumeWeight, setVolumeWeight] = useState("");
  const [efficiency, setEfficiency] = useState("");

  const [prePlateletCount, setPrePlateletCount] = useState(""); 
  const [postPlateletCount, setPostPlateletCount] = useState(""); 
  const [yieldWeight, setYieldWeight] = useState("");
  let [height, setHeight] = useState("");
  let [volume, setVolume] = useState("");

  const [standardResult, setStandardResult] = useState("");
  const [apheresisResult, setApheresisResult] = useState("");

  const [yieldResult, setYieldResult] = useState("");
  const [cciResult, setCciResult] = useState("");

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePersonTypeChange = (event, newValue) => {
    setPersonType(newValue);
  };

  const handleTransfusionTypeChangeVolume = (event, newValue) => {
    setTransfusionTypeVolume(newValue);
  };  

  const handleTransfusionTypeChangeYield = (event, newValue) => {
    setTransfusionTypeYield(newValue);
  };  

  let bloodVolumeVolume = 0; 
  let bloodVolumePerKg = 0;
  let plateletCountDesired = 0; 
  let differencePlateletCountVolume = 0; 

  const volumeCalculateAndShow = () => {
    let plateletCountTimesThousand = parseInt(plateletCount) * 1000; 
    let volumeCalcWeight = parseInt(volumeWeight);
    let increment = parseInt(efficiency) / 100;
    
    if (transfusionTypeVolume === "therapeutic") {
      plateletCountDesired = 100000;
    } 
    if (transfusionTypeVolume === "profilatic") {
      plateletCountDesired = 50000;
    }
    
    differencePlateletCountVolume = plateletCountDesired - plateletCountTimesThousand;

    if (personType === "newborn" || personType === "premature") {
      volumeCalcWeight = volumeCalcWeight / 1000;
    }

    if (personType === "male") {
      bloodVolumePerKg = 75;
    } else if (personType === "female") {
      bloodVolumePerKg = 65;
    } else if (personType === "newborn") {
      bloodVolumePerKg = 90;
    } else {
      bloodVolumePerKg = 110;
    }
    
    bloodVolumeVolume = volumeCalcWeight * bloodVolumePerKg 

    let kStandard = 1000000000 * increment;
    let kApheresis = 1500000000 * increment;

    let temp = differencePlateletCountVolume * bloodVolumeVolume * 1000;

    let finalStandard = temp / kStandard;
    let finalApheresis = temp / kApheresis;

    setStandardResult(finalStandard);
    setApheresisResult(finalApheresis);
  }

  let differencePlateletCountYield = 0; 
  let bloodVolumeYield = 0; 
  let typeSorA = 0; 
  let surface = 0;

  const yieldCalculateAndShow = () => {
    let yieldCalcWeight = parseInt(yieldWeight);

    differencePlateletCountYield = (postPlateletCount - prePlateletCount) * 1000;

    if (personType === "newborn" || personType === "premature") {
      yieldCalcWeight = yieldCalcWeight / 1000;
    }

    if (personType === "male") {
      bloodVolumePerKg = 75;
    } else if (personType === "female") {
      bloodVolumePerKg = 65;
    } else if (personType === "newborn") {
      bloodVolumePerKg = 90;
    } else {
      bloodVolumePerKg = 110;
    }

    bloodVolumeYield = yieldCalcWeight * bloodVolumePerKg;

    if (transfusionTypeYield === "standard") {
      typeSorA = 1000000000;
    } 
    if (transfusionTypeYield === "apheresis") {
      typeSorA = 1500000000;
    }

    volume = volume * typeSorA;

    let yieldCalc = (differencePlateletCountYield * bloodVolumeYield * 1000) / volume; // rendimento

    surface = 0.007184 * Math.pow(height, 0.725) * Math.pow(yieldWeight, 0.425);

    let cci = (differencePlateletCountYield * surface) / (volume / 100000000000);
    
    let finalYield = yieldCalc * 100;
    
    let finalCci = cci / 1000;

    setYieldResult(finalYield);
    setCciResult(finalCci);
  }

  return (
    <Background>
      <BrandWrapper>
        <Title>Platelet Calculator</Title>
        <AlbieroWrapper><CalculateIcon /><AlbieroText>Albiero's Formula</AlbieroText></AlbieroWrapper>
      </BrandWrapper>
      <TabsWrapper>
        <StyledTabs value={value} onChange={handleTabChange} aria-label="tabs for three areas of page">
          <StyledTab label="Volume" />
          <StyledTab label="Yield" />
          <StyledTab label="About" />
        </StyledTabs>
      </TabsWrapper>      
      <Display>
        {value === 0 ? (
          <Volume>
            <Options>
              <PersonTypeFormControl>
                <FormLabel id="demo-radio-buttons-group-label">Person Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  value={personType}
                  name="radio-buttons-group"
                  onChange={handlePersonTypeChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female or Children" />
                  <FormControlLabel value="newborn" control={<Radio />} label="Newborn" />
                  <FormControlLabel value="premature" control={<Radio />} label="Premature" />
                </RadioGroup>
              <WeightInGrams>Newborn and premature weight must be in grams.</WeightInGrams>              
              </PersonTypeFormControl>
              <TransfusionTypeFormControl>
                <FormLabel id="demo-radio-buttons-group-label">Transfusion Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="therapeutic"
                  value={transfusionTypeVolume}
                  name="radio-buttons-group"
                  onChange={handleTransfusionTypeChangeVolume}
                >
                  <FormControlLabel value="therapeutic" control={<Radio />} label="Therapeutic" />
                  <FormControlLabel value="profilatic" control={<Radio />} label="Profilatic" />
                </RadioGroup>
              </TransfusionTypeFormControl>
            </Options>            
            <Specs>
              <FormControlWrapper>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-platelet-count"
                    value={plateletCount}
                    onChange={e => setPlateletCount(e.target.value)}
                    endAdornment={<InputAdornment position="end">000/mm<sup>3</sup></InputAdornment>}
                    aria-describedby="platelet-count"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'platelet-count',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Platelet Count</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={volumeWeight}
                    onChange={e => setVolumeWeight(e.target.value)}
                    endAdornment={<InputAdornment position="end">
                      {personType === 'male' || personType === 'female' ? 'kg' : 'g'}
                    </InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={efficiency}
                    onChange={e => setEfficiency(e.target.value)}
                    endAdornment={<InputAdornment position="end">%</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Yield</FormHelperText>
                </CustomFormControl>
              </FormControlWrapper>
            </Specs>
            <Results>
              <CustomButton variant="outlined" onClick={volumeCalculateAndShow}>Calculate</CustomButton>
              <ResultsLabelAndNumber>
                <ResultsLabel>Standard/Randomized</ResultsLabel>
                <ResultsNumber>{standardResult ? standardResult.toFixed(0) + " ml" : '0 ml'}</ResultsNumber>
              </ResultsLabelAndNumber>
              <ResultsLabelAndNumber>
                <ResultsLabel>Apheresis/Buffy Coat/Pool</ResultsLabel>
                <ResultsNumber>{apheresisResult ? apheresisResult.toFixed(0) + " ml" : '0 ml'}</ResultsNumber>
              </ResultsLabelAndNumber>              
            </Results>
          </Volume>
          ) 
        : value === 1 ? (
          <Yield>
            <Options>
              <PersonTypeFormControl>
                <FormLabel id="demo-radio-buttons-group-label">Person Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  value={personType}
                  name="radio-buttons-group"
                  onChange={handlePersonTypeChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female or Children" />
                  <FormControlLabel value="newborn" control={<Radio />} label="Newborn" />
                  <FormControlLabel value="premature" control={<Radio />} label="Premature" />
                </RadioGroup>
                <WeightInGrams>Newborn and premature weight must be in grams.</WeightInGrams>
              </PersonTypeFormControl>              
              <TransfusionTypeFormControl>
                <FormLabel id="demo-radio-buttons-group-label">Transfusion Type</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="standard"
                  value={transfusionTypeYield}
                  name="radio-buttons-group"
                  onChange={handleTransfusionTypeChangeYield}
                >
                  <FormControlLabel value="standard" control={<Radio />} label="Standard" />
                  <FormControlLabel value="apheresis" control={<Radio />} label="Apheresis" />
                </RadioGroup>
              </TransfusionTypeFormControl>
            </Options>
            <Specs>
              <FormControlWrapper>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-platelet-count"
                    value={prePlateletCount}
                    onChange={e => setPrePlateletCount(e.target.value)}
                    endAdornment={<InputAdornment position="end">000/mm<sup>3</sup></InputAdornment>}
                    aria-describedby="platelet-count"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'platelet-count',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Platelet Count (pre-transfusion)</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-platelet-count"
                    value={postPlateletCount}
                    onChange={e => setPostPlateletCount(e.target.value)}
                    endAdornment={<InputAdornment position="end">000/mm<sup>3</sup></InputAdornment>}
                    aria-describedby="platelet-count"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'platelet-count',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Platelet Count (post-transfusion)</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={yieldWeight}
                    onChange={e => setYieldWeight(e.target.value)}
                    endAdornment={<InputAdornment position="end">
                      {personType === 'male' || personType === 'female' ? 'kg' : 'g'}
                    </InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Weight</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={height}
                    onChange={e => setHeight(e.target.value)}
                    endAdornment={<InputAdornment position="end">cm</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Height</FormHelperText>
                </CustomFormControl>
                <CustomFormControl variant="standard">
                  <Input
                    id="standard-adornment-weight"
                    value={volume}
                    onChange={e => setVolume(e.target.value)}
                    endAdornment={<InputAdornment position="end">ml</InputAdornment>}
                    aria-describedby="standard-weight-helper-text"
                    onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    inputProps={{
                      'aria-label': 'weight',
                    }}
                  />
                  <FormHelperText id="standard-weight-helper-text">Volume</FormHelperText>
                </CustomFormControl>
              </FormControlWrapper>
            </Specs>
            <Results>
              <CustomButton variant="outlined" onClick={yieldCalculateAndShow}>Calculate</CustomButton>
              <ResultsLabelAndNumber>
                <ResultsLabel>Yield</ResultsLabel>
                <ResultsNumber>{yieldResult ? yieldResult.toFixed(0) + " %" : '0 %'}</ResultsNumber>
              </ResultsLabelAndNumber>
              <ResultsLabelAndNumber>
                <ResultsLabel>CCI</ResultsLabel>
                <ResultsNumber>{cciResult ? cciResult.toFixed(3) + " /l" : '0 /l'}</ResultsNumber>
              </ResultsLabelAndNumber>
            </Results>
          </Yield>
          )
        : (
          <About> 
            <AboutText> 
              Medical app used to calculate the exact platelet count for a transfusion.<br/>
              Garra Studies has developed this app to facilitate the calculation of platelet concentrate volume, based on "Albiro's Formula".<br/>
              Dr Andre Luís Albiero is a doctor-collaborator professor at FMUSH and specialist in hemotherapy by the Brazilian association of hemathology and hemotherapy.<br/>
              This application is a practical tool which can be used to obtain sugestions of volumes of platelet concentrates and transfusion in a variety of situation: profilatic, therapeutic, in adults and children. The app also calculates the transfusion yield and offers the option to make fine adjustments of the calculated volumes according to the yields observed in practice.
            </AboutText>  
           <ReferenceAndLink>
            Reference: <br/>
            <Link 
              href="http://buscatextual.cnpq.br/buscatextual/visualizacv.do?metodo=apresentar&id=K4797403A3"
              target="_blank"
            >Dr. Andre Luís Albiero - Curriculum Lattes</Link>
           </ReferenceAndLink>
          </About>
          )
        }
      </Display>
    </Background>
  )
};