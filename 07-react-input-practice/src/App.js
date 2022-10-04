import { useState } from 'react';
import './App.css';

function App() {

  // **************** SELECTED ****************

  const genders = [
    { key: 1, value: "Erkek" },
    { key: 2, value: "Kadın" }
  ]
  const [gender, setGender] = useState(0);




  // **************** MULTİPLE SELECTED ****************

  const categoryList = [
    { key: 1, value: "Html" },
    { key: 2, value: "Css" },
    { key: 3, value: "JavaScript" },
    { key: 4, value: "GO" },
  ]

  const [categories, setCategories] = useState([]);

  const selectedCategories = categories && categoryList.filter(c => categories.includes(c.key))

  // **************** RULE CONTROL (CHECKBOX) ****************

  const [rules, setRules] = useState([
    { key: 1, value: "I accept rule 1", checked: false },
    { key: 2, value: "I accept rule 2", checked: false },
    { key: 3, value: "I accept rule 3", checked: true }
  ])

  const [rule, setRule] = useState(true)

  const checkHandle = (key, newChecked) => {
    setRules(rules.map(rule => rule.key === key ? { ...rule, checked: newChecked } : rule))

  }

  const disabled = rules.every(rule => rule.checked)

  // const selectedGender = useMemo(() => {
  //   return genders[gender]
  // }, [gender])



  return (
    <div className="App">

      {/* **************** SELECTED **************** */}

      <select value={gender} onChange={e => setGender(e.target.value)} name="" id="">
        <option value="">Seçin</option>

        {
          genders.map((gender) => (
            <option value={gender.key} key={gender.key}>{gender.value}</option>
          ))
        }
      </select>
      {gender}
      <br />
      <br />

      {/* **************** MULTİPLE SELECTED **************** */}

      <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => +option.value))} name="" id="">
        <option value="">Seçin</option>

        {
          categoryList.map((language) => (
            <option value={language.key} key={language.key}>{language.value}</option>
          ))
        }
      </select>



      <pre>{JSON.stringify(selectedCategories, null, 2)}</pre>


      <br />
      <br />

      {/* **************** RULE CONTROL (CHECKBOX) **************** */}

      <label htmlFor="">
        <input type="checkbox" checked={rule} onChange={e => setRule(e.target.checked)} />
        I accept the rules.
      </label>
      <br />
      <br />
      <button disabled={!rule}>Complated</button>

      <br />
      <br />
      {
        rules.map(rule => (
          <label htmlFor="">
            <input type="checkbox" checked={rule.checked} onChange={(e) => { checkHandle(rule.key, e.target.checked) }} />
            {rule.value}
          </label>
        ))
      }

      <br />
      <br />

      <pre>{JSON.stringify(rules, null, 2)}</pre>

      <button disabled={!disabled}>I accept all rules</button>


    </div>
  );
}

export default App;
