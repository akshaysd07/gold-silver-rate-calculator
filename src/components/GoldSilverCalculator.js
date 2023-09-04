import React, { useState }   from 'react';
import './style.css';

export default function GoldSilverCalculator() {

        const [goldrate, setGoldrate] = useState();
        const [silverRate, setSilverRate] = useState();
        const [invalidGoldMessage, setInvalidGoldMessage] = useState(false);
        const [invalidSilverMessage, setInvalidSilverMessage] = useState(false);
        const [wastage, setWastage] = useState();
        const [goldweight, setGoldweight] = useState();
        const [silverWeight, setSilverWeight] = useState();
        const [goldamount, setGoldamount] = useState(0);
        const [silveramount, setSilverAmount] = useState(0);
        const [wastageamount, setWastageAmount] = useState(0);
        const [gstgold, setGSTGold] = useState(0);
        const [gstsilver, setGSTSilver] = useState(0);
        const [totalGoldAmount, setTotalGoldamount] = useState(0);
        const [totalSilverAmount, setTotalSilveramount] = useState(0);
        const [wastageingram, setWastageingram] = useState(0);

        function getGoldAmount(){
            if(goldrate && goldweight){
                const goldAmount = goldrate * goldweight;
                const wastageAmount = (wastage/100)*goldAmount;
                const GSTAmount = 0.03*(goldAmount + wastageAmount);
                const totalGoldAmount = goldAmount + wastageAmount + GSTAmount;
                const wastageinGram = (wastage/100)*goldweight;

                setGoldamount(goldAmount);
                setGSTGold(GSTAmount);
                setTotalGoldamount(totalGoldAmount);
                setWastageAmount(wastageAmount);
                setWastageingram(wastageinGram);
            }else{
                setInvalidGoldMessage(true);
            }
        }

        function getSilverAmount(){
            if(silverRate && silverWeight){
                const silverAmount = silverRate * silverWeight;
                const GSTAmount = 0.03*silverAmount;
                const totalSilverAmount = silverAmount + GSTAmount;

                setSilverAmount(silverAmount);
                setGSTSilver(GSTAmount);
                setTotalSilveramount(totalSilverAmount);
            }else{
                setInvalidSilverMessage(true);
            }
        }

            return (
                <div className="container">
                    <div className="row">
                        <div className="topBtn col-12">
                            <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample1" aria-expanded="false" aria-controls="multiCollapseExample1">Gold Calculator</button>
                            <button className="btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Silver Calculator</button>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="collapse multi-collapse show" id="multiCollapseExample1">
                            <h1 className="headerName">Gold Calculator</h1>
                            <form>
                                <div>
                                    <label>Gold rate in &#x20b9;</label>
                                    <input type="number" min={1} className="form-control" value={goldrate} onChange={e => setGoldrate(+e.target.value)}/>
                                </div>
                                <div>
                                    <label>Gold Weight in grams</label>
                                    <input type="number" min={1} className="form-control" value={goldweight} onChange={e => setGoldweight(+e.target.value)}/>
                                </div>
                                <div>
                                    <label>Wastage in %</label>
                                    <input type="number" min={0} className="form-control" value={wastage} onChange={e => setWastage(+e.target.value)}/>
                                </div>
                                {invalidGoldMessage && <p className="invalidMessage"> ** Invalid input values **</p>}
                            </form>
                            <button className="button" onClick={getGoldAmount}>Calculate</button>

                            <table className="table">
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                </tr>
                                <tr>
                                    <td>Actual Gold Rate</td>
                                    <td>&#x20b9;{goldamount}</td>
                                </tr>
                                <tr>
                                    <td>Wastage in amount ({wastage}%)</td>
                                    <td>&#x20b9;{Math.round(wastageamount)}</td>
                                </tr>
                                <tr>
                                    <td>GST (3%)</td>
                                    <td>&#x20b9;{Math.round(gstgold)}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>&#x20b9;{Math.round(totalGoldAmount)}</td>
                                </tr>
                            </table>
                            <div>
                                <p>*Wastage in grams: {wastageingram}</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-6 col-sm-12 col-xs-12">
                        <div className="collapse multi-collapse" id="multiCollapseExample2">

                            <h1 className="headerName">Silver Calculator</h1>
                            <form>
                                <div>
                                    <label>Silver rate in &#x20b9;</label>
                                    <input type="number" min={1} className="form-control" value={silverRate} onChange={e => setSilverRate(+e.target.value)}/>
                                </div>
                                <div>
                                    <label>Silver Weight in grams</label>
                                    <input type="number" min={1} className="form-control" value={silverWeight} onChange={e => setSilverWeight(+e.target.value)}/>
                                </div>
                                {invalidSilverMessage && <p className="invalidMessage"> ** Invalid input values **</p>}
                            </form>
                            <button className="button" onClick={getSilverAmount}>Calculate</button>

                            <table className="table">
                                <tr>
                                    <th>Description</th>
                                    <th>Rate</th>
                                </tr>
                                <tr>
                                    <td>Actual Silver Rate</td>
                                    <td>&#x20b9;{silveramount}</td>
                                </tr>
                                <tr>
                                    <td>GST (3%)</td>
                                    <td>&#x20b9;{Math.round(gstsilver)}</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>&#x20b9;{Math.round(totalSilverAmount)}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    </div>
                    <div className="footerBlock">
                        <p className="footerNote">Developed based on indian gold & silver market standards by <a href="https://github.com/akshaysd07" target="_blank">Akshay</a> </p>
                    </div>
                </div>

            );

}
