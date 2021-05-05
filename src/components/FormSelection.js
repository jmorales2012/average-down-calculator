import './FormSelection.css'

const FormSelection = ({ defaultChecked, onClick }) => {
  const GetFormSelection = (e) => {
    onClick(e.target.value)
  }

  return (
    <div className='form-selection' onChange={GetFormSelection}>
      <input type='radio' name='Form Selection' value='1' defaultChecked />
      <label htmlFor='Form Selection'>Average Down Calculator</label>
      <input type='radio' name='Form Selection' value='2' />
      <label htmlFor='Form Selection'>Average Cost Calculator</label>
    </div>
  )
}

export default FormSelection
