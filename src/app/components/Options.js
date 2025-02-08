import CheckBoxLabel from "./CheckBoxLabel"
import NumberInput from "./NumberInput"
import RangeInput from "./RangeInput"

export default function Options() {
    return (
        <main className='p-4 shadow-[--color-shadow] shadow-lg text-center w-64 rounded-2xl bg-[--color-obj]'>
            <div>
                <p>Operators</p>
                <div className="flex p-2 items-center justify-center gap-4">
                    <CheckBoxLabel id='btnAdd' label='+' description='enables addition (+) in the operation' />
                    <CheckBoxLabel id='btnSub' label='-' description='enables subtraction (-) in the operation' />
                    <CheckBoxLabel id='btnMulti' label='*' description='enables multiplication (*) in the operation' />
                    <CheckBoxLabel id='btnDiv' label='/' description='enables division (/) in the operation' />
                </div>
            </div>
            <div>
                <p>Order Symbols</p>
                <div className="flex p-2 items-center justify-center text-red-700">
                    Coming Soon
                </div>
            </div>
            <div>
                <p>Other Options</p>
                <div className="flex gap-3 flex-col p-2 items-center justify-center">
                    {/* TODO: regional decimal point option (exemple: '.' and ',') */}
                    {/* TODO: Option to add lives to the user, if zero, will be game over */}
                    <NumberInput />
                    <RangeInput id='minRange' label='Min Range' />
                    <RangeInput id='maxRange' label='Max Range' />
                </div>
            </div>
        </main>
    )
}