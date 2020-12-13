import React from 'react'
import { useState } from 'react'
import { AreaSeries, LineSeries, XYPlot } from 'react-vis';
import './style.css'

function Index() {

    const fuzzyRules = [
        { 'x': [1, 1], 'y': 1 },
        { 'x': [1, 2], 'y': 1 },
        { 'x': [1, 3], 'y': 1 },
        { 'x': [2, 3], 'y': 1 },
        { 'x': [2, 2], 'y': 2 },
        { 'x': [2, 1], 'y': 3 },
        { 'x': [3, 1], 'y': 3 },
        { 'x': [3, 2], 'y': 3 },
        { 'x': [3, 3], 'y': 3 }
    ]
    // const [fuzzyRules, setFuzzyRules] = useState(
    //     ['x' === [1, 1], 'y' === 1],
    //     ['x' === [1, 2], 'y' === 1],
    //     ['x' === [1, 3], 'y' === 1],
    //     ['x' === [2, 3], 'y' === 1],
    //     ['x' === [2, 2], 'y' === 2],
    //     ['x' === [2, 1], 'y' === 3],
    //     ['x' === [3, 1], 'y' === 3],
    //     ['x' === [3, 2], 'y' === 3],
    //     ['x' === [3, 3], 'y' === 3],
    // )
    const fuzzy = ["", "RENDAH", "SEDANG", "TINGGI"]

    const [permintaan, setPermintaan] = useState();
    const [persediaan, setPersediaan] = useState();
    const [produksi, setProduksi] = useState();

    const [fuzzyInput, setFuzzyInput] = useState([])
    const [fuzzyOutput, setFuzzyOutput] = useState([])
    const [output, setOutput] = useState([])

    const [hAkhir, setHAkhir] = useState()
    const [next, setNext] = useState(1)


    const muTrapesium = (a, x) => {
        var mu = null;
        if (x <= a[0])
            mu = 0;
        else if (x > a[0] && x <= a[1]) //tinggi
            mu = ((x - a[0]) / (a[1] - a[0]));
        else if (x > a[1] && x <= a[2])
            mu = 1;
        else if (x > a[2] && x <= a[3]) //
            mu = ((a[3] - x) / (a[3] - a[2]));
        else if (x > a[3])
            mu = 0;

        return mu;
    }

    const muPersediaan = (n) => {
        // fuzzy_input;

        // console.log(n);
        var var_ling = [];
        if (n >= 0 && n <= 22) {
            // var_ling = 1;
            var_ling.push(1);
        }

        if (n >= 18 && n <= 32) {
            // var_ling = 2;
            var_ling.push(2);
        }

        if (n >= 28 && n <= 38) {
            // var_ling = 3;
            var_ling.push(3);
        }

        // console.log(var_ling)
        var mu = null;
        var a = [];
        // Array.prototype.forEach.call(var_ling, v => {
        // Array.prototype.forEach.call(var_ling, v => {
        var_ling.map((v) => {
            // console.log(v)
            if (v === 1) {
                a = [0, 0, 18, 22];
                mu = muTrapesium(a, n);

                // setFuzzyInput(['in' === 'Persediaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Persediaan",
                    vl: v,
                    nilai: mu
                }]);
            } else if (v === 2) {
                a = [18, 22, 28, 32];
                mu = muTrapesium(a, n);

                // setFuzzyInput(['in' === 'Persediaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Persediaan",
                    vl: v,
                    nilai: mu
                }]);
            } else if (v === 3) {
                a = [28, 32, 38, 38];
                mu = muTrapesium(a, n);
                // setFuzzyInput(['in' === 'Persediaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Persediaan",
                    vl: v,
                    nilai: mu
                }]);
            }

        })

        //echo json_encode(fuzzy_input)."</br>";
    }

    const muPermintaan = (n) => {
        // fuzzy_input;

        // console.log(n);
        var var_ling = [];
        if (n >= 0 && n <= 81) {
            // var_ling = 1;
            var_ling.push(1);
        }

        if (n >= 78 && n <= 102) {
            // var_ling = 2;
            var_ling.push(2);
        }

        if (n >= 99 && n <= 120) {
            // var_ling = 3;
            var_ling.push(3);
        }

        // console.log(var_ling)
        var mu = null;
        var a = [];
        // Array.prototype.forEach.call(var_ling, v => {
        // Array.prototype.forEach.call(var_ling, v => {
        var_ling.map((v) => {
            // console.log(v)
            if (v === 1) {
                a = [0, 0, 78, 81];
                mu = muTrapesium(a, n);

                // setFuzzyInput(['in' === 'Permintaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Permintaan",
                    vl: v,
                    nilai: mu
                }]);
            } else if (v === 2) {
                a = [78, 81, 99, 102];
                mu = muTrapesium(a, n);

                // setFuzzyInput(['in' === 'Permintaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Permintaan",
                    vl: v,
                    nilai: mu
                }]);
            } else if (v === 3) {
                a = [99, 102, 120, 120];
                mu = muTrapesium(a, n);
                // setFuzzyInput(['in' === 'Permintaan', 'vl' === ("0|".v), 'mu' === mu]);
                setFuzzyInput(fuzzyInput => [...fuzzyInput, {
                    in: "Permintaan",
                    vl: v,
                    nilai: mu
                }]);
            }

        })

        //echo json_encode(fuzzy_input)."</br>";
    }

    const inferensi = (persedia, perminta) => {
        // global fuzzy_rules;

        var rules = null;

        var ketemu = false;
        var i = 0;

        // console.log(persedia, perminta)
        // console.log(fuzzyRules.length)
        // console.log(fuzzyRules[0].x[0])
        while (!ketemu && i < fuzzyRules.length) {
            if (fuzzyRules[i].x[0] === persedia) {
                if (fuzzyRules[i].x[1] === perminta) {
                    rules = i;
                    ketemu = true;
                }
            }

            i++;
        }

        return rules;
    }

    const inferensi_rules = () => {
        // global fuzzy_input, fuzzy_output, fuzzy_rules;

        var set_rules_1 = [];
        var set_rules_2 = [];
        // var set_rules_3 = [];

        // fuzzyInput.forEach((input) => {
        fuzzyInput.map((input) => {

            // var v = explode('|', input['vl']);
            console.log(input)
            var v = input.vl;

            if (input.in === 'Permintaan')
                set_rules_1.push({'p' : v, 'x' : input.nilai});
                // set_rules_1 = [{'p' : v, 'x' : input.nilai},];
                // set_rules_1 = [...set_rules_1, { 'p': v[1], 'x': input.nilai },];
            else if (input.in === 'Persediaan')
                set_rules_2.push({'p' : v, 'x' : input.nilai});
                // set_rules_2 = [{'p' : v, 'x' : input.nilai},];
                // set_rules_2 = [...set_rules_2, { 'p': v[1], 'x': input.nilai },];
            // else if (input.in === 'Minat')
            //     set_rules_3 = ['p' === v[1], 'x' === input.nilai];
        })

        console.log(set_rules_2)

        var x = 0;
        while (x < set_rules_1.length) {
            var y = 0;
            while (y < set_rules_2.length) {
                var result = inferensi(set_rules_1[x].p, set_rules_2[y].p);
                var res = Math.min(set_rules_1[x].x, set_rules_2[y].x);
                console.log(set_rules_1[x].p, set_rules_2[y].p, result)
                const chek = fuzzyRules[result]
                console.log(chek)
                var muValue = [set_rules_1[x].x, set_rules_2[y].x, res]
                // setFuzzyOutput([{ 'rules': fuzzyRules[result], 'mu': [set_rules_1[x].x, set_rules_2[y].x, res] }]);
                // setFuzzyOutput(fuzzyOutput => [...fuzzyOutput, { 'rules': fuzzyRules[result], 'mu': muValue }]);
                setFuzzyOutput(fuzzyOutput => [...fuzzyOutput, { 'rules': chek, 'mu': muValue }]);
                y++;
            }
            x++;
        }
        setNext(2);
    }

    const inferensi_adv_rules = () => {
        // global fuzzy_output, output, fuzzy;

        var set_output1 = [];
        var set_output2 = [];
        var set_output3 = [];
        // fuzzyOutput.forEach((out) => {
        fuzzyOutput.map((out) => {
            if (out.rules.y === 1) {
                set_output1.push(out.mu[2]);
            } else if (out.rules.y === 2) {
                set_output2.push(out.mu[2]);
            } else if (out.rules.y === 3) {
                set_output3.push(out.mu[2]);
            }
        })

        // if (!empty(set_output1))
        if (set_output1.length!==0){
            console.log(set_output1)
            setOutput(output=>[...output,{'p' : fuzzy[1], 'x' : Math.max(set_output1)}]);
        }
        if (set_output2.length!==0){
            setOutput(output=>[...output,{'p' : fuzzy[2], 'x' : Math.max(set_output2)}]);
        }
        if (set_output3.length!==0){

            setOutput(output=>[...output,{'p' : fuzzy[3], 'x' : Math.max(set_output3)}]);
        }
        setNext(3);
    }


    const defuzzyfication = () => {
        //metode centoid
        // global output, fuzzy;
        var range1 = [0, 88];
        var range2 = [84, 111];
        var range3 = [107, 130];

        var acak = [];

        var count;

        if (output.length === 1) {
            count = 10;
        } else {
            count = parseInt(10 / output.length);
        }

        var i = 0;
        while (i < output.length) {
            if (output[i].p === fuzzy[1]) {
                var x = 0;
                while (x <= count) {
                    var y = Math.floor(Math.random() * range1[1]) + range1[0];
                    acak.push({'y' : y, 'yxmu' : (y * output[i].x), 'mu' : output[i].x});
                    // acak = ['y' === y, 'yxmu' === (y * output[i]['x']), 'mu' === output[i]['x']];

                    x++;
                }
            } else if (output[i].p === fuzzy[2]) {
                x = 0;
                while (x <= count) {
                    y = Math.floor(Math.random() * range2[1]) + range2[0];
                    acak.push({'y' : y, 'yxmu' : (y * output[i].x), 'mu' : output[i].x});
                    // acak = ['y' === y, 'yxmu' === (y * output[i]['x']), 'mu' === output[i]['x']];

                    x++;
                }
            } else if (output[i].p === fuzzy[3]) {
                x = 0;
                while (x <= count) {
                    y = Math.floor(Math.random() * range3[1]) + range3[0];
                    acak.push({'y' : y, 'yxmu' : (y * output[i].x), 'mu' : output[i].x});
                    // acak = ['y' === y, 'yxmu' === (y * output[i]['x']), 'mu' === output[i]['x']];

                    x++;
                }
            }
            i++;
        }

        var yxmu = 0;
        var mu = 0;
        for (var a = 0; a < acak.length; a++) {
            yxmu += acak[a].yxmu;
            mu += acak[a].mu;


        }

        setNext(4);
        setHAkhir(yxmu / mu)
        // return (yxmu / mu);

    }

    const hitung = (e) => {
        e.preventDefault();
        muPermintaan(permintaan)
        muPersediaan(persediaan)

        // inferensi_rules();
        // inferensi_adv_rules();
    }

    // const FuzzyOut = () => {
    //     return inferensi_rules()
    // }

    const Out = ()=>{
        // inferensi_adv_rules()
        var i = 0;
        return (
            <div className="">
                <h3>Output</h3>
                    {
                        output.map((x,index) => {
                            console.log(x)
                            i++;
                            return(
                                <h6 key={index}>
                                    {/* Output {i} = {x['p']}"["{x['x']}"]" */}
                                    Output {i} = {x.p}"["{x.x}"]"
                                    <br/>
                                </h6>
                            )
                        })
                    }
                <br /><br />
            </div>
        )                
    }

    const charPersediaan = {
        rendah:[
            // {x: 0, y: 1},
            // {x: 1, y: 1},
            // {x: 2, y: 1},
            // {x: 3, y: 1},
            // {x: 4, y: 1},
            // {x: 5, y: 1},
            // {x: 6, y: 1},
            // {x: 7, y: 1},
            // {x: 8, y: 1},
            // {x: 9, y: 1},
            // {x: 10, y: 1},
            // {x: 11, y: 1},
            {x: 12, y: 1},
            {x: 13, y: 1},
            {x: 14, y: 1},
            {x: 15, y: 1},
            {x: 16, y: 1},
            {x: 17, y: 1},
            {x: 18, y: 1},
            {x: 19, y: 0.75},
            {x: 20, y: 0.5},
            {x: 21, y: 0.25},
            {x: 22, y: 0},
        ],
        sedang :[
            {x: 18, y: 0},
            {x: 19, y: 0.25},
            {x: 20, y: 0.5},
            {x: 21, y: 0.75},
            {x: 22, y: 1},
            {x: 23, y: 1},
            {x: 24, y: 1},
            {x: 25, y: 1},
            {x: 26, y: 1},
            {x: 27, y: 1},
            {x: 28, y: 1},
            {x: 29, y: 0.75},
            {x: 30, y: 0.5},
            {x: 31, y: 0.25},
            {x: 32, y: 0},
        ],
        tinggi : [
            {x: 29, y: 0},
            {x: 30, y: 0.25},
            {x: 31, y: 0.5},
            {x: 32, y: 0.75},
            {x: 33, y: 1},
            {x: 34, y: 1},
            {x: 35, y: 1},
            {x: 36, y: 1},
            {x: 37, y: 1},
            {x: 38, y: 1},
            {x: 39, y: 1},
        ]

    };

    const charPermintaan = {
        rendah:[
            // {x: 0, y: 1},
            // {x: 1, y: 1},
            // {x: 2, y: 1},
            // {x: 3, y: 1},
            // {x: 4, y: 1},
            // {x: 5, y: 1},
            // {x: 6, y: 1},
            // {x: 7, y: 1},
            // {x: 8, y: 1},
            // {x: 9, y: 1},
            // {x: 10, y: 1},
            // {x: 11, y: 1},
            // {x: 12, y: 1},
            // {x: 13, y: 1},
            // {x: 14, y: 1},
            // {x: 15, y: 1},
            // {x: 16, y: 1},
            // {x: 17, y: 1},
            // {x: 18, y: 1},
            // {x: 19, y: 1},
            // {x: 20, y: 1},
            // {x: 21, y: 1},
            // {x: 22, y: 1},
            // {x: 23, y: 1},
            // {x: 24, y: 1},
            // {x: 25, y: 1},
            // {x: 26, y: 1},
            // {x: 27, y: 1},
            // {x: 28, y: 1},
            // {x: 29, y: 1},
            // {x: 30, y: 1},
            // {x: 31, y: 1},
            // {x: 32, y: 1},
            // {x: 33, y: 1},
            // {x: 34, y: 1},
            // {x: 35, y: 1},
            // {x: 36, y: 1},
            // {x: 37, y: 1},
            // {x: 38, y: 1},
            // {x: 39, y: 1},
            // {x: 40, y: 1},
            // {x: 41, y: 1},
            // {x: 42, y: 1},
            // {x: 43, y: 1},
            // {x: 44, y: 1},
            // {x: 45, y: 1},
            // {x: 46, y: 1},
            // {x: 47, y: 1},
            // {x: 48, y: 1},
            // {x: 49, y: 1},
            // {x: 50, y: 1},
            // {x: 51, y: 1},
            // {x: 52, y: 1},
            // {x: 53, y: 1},
            // {x: 54, y: 1},
            // {x: 55, y: 1},
            // {x: 56, y: 1},
            // {x: 57, y: 1},
            // {x: 58, y: 1},
            // {x: 59, y: 1},
            {x: 60, y: 1},
            {x: 61, y: 1},
            {x: 62, y: 1},
            {x: 63, y: 1},
            {x: 64, y: 1},
            {x: 65, y: 1},
            {x: 66, y: 1},
            {x: 67, y: 1},
            {x: 68, y: 1},
            {x: 69, y: 1},
            {x: 70, y: 1},
            {x: 71, y: 1},
            {x: 72, y: 1},
            {x: 73, y: 1},
            {x: 74, y: 1},
            {x: 75, y: 1},
            {x: 76, y: 1},
            {x: 77, y: 1},
            {x: 78, y: 1},
            {x: 79, y: 0.7},
            {x: 80, y: 0.35},
            {x: 81, y: 0},
        ],
        sedang :[
            {x: 78, y: 0},
            {x: 79, y: 0.35},
            {x: 80, y: 0.7},
            {x: 81, y: 1},
            {x: 82, y: 1},
            {x: 83, y: 1},
            {x: 84, y: 1},
            {x: 85, y: 1},
            {x: 86, y: 1},
            {x: 87, y: 1},
            {x: 88, y: 1},
            {x: 89, y: 1},
            {x: 90, y: 1},
            {x: 91, y: 1},
            {x: 92, y: 1},
            {x: 93, y: 1},
            {x: 94, y: 1},
            {x: 95, y: 1},
            {x: 96, y: 1},
            {x: 97, y: 1},
            {x: 98, y: 1},
            {x: 99, y: 1},
            {x: 100, y: 0.7},
            {x: 101, y: 0.35},
            {x: 102, y: 0},
        ],
        tinggi : [
            {x: 99, y: 0},
            {x: 100, y: 0.35},
            {x: 101, y: 0.7},
            {x: 102, y: 1},
            {x: 103, y: 1},
            {x: 104, y: 1},
            {x: 105, y: 1},
            {x: 106, y: 1},
            {x: 107, y: 1},
            {x: 108, y: 1},
            {x: 109, y: 1},
            {x: 110, y: 1},
            {x: 111, y: 1},
            {x: 112, y: 1},
            {x: 113, y: 1},
            {x: 114, y: 1},
            {x: 115, y: 1},
            {x: 116, y: 1},
            {x: 117, y: 1},
            {x: 118, y: 1},
            {x: 119, y: 1},
            {x: 120, y: 1},
        ]
    };
    const charProduksi = {
        rendah:[
            // {x: 0, y: 1},
            // {x: 1, y: 1},
            // {x: 2, y: 1},
            // {x: 3, y: 1},
            // {x: 4, y: 1},
            // {x: 5, y: 1},
            // {x: 6, y: 1},
            // {x: 7, y: 1},
            // {x: 8, y: 1},
            // {x: 9, y: 1},
            // {x: 10, y: 1},
            // {x: 11, y: 1},
            // {x: 12, y: 1},
            // {x: 13, y: 1},
            // {x: 14, y: 1},
            // {x: 15, y: 1},
            // {x: 16, y: 1},
            // {x: 17, y: 1},
            // {x: 18, y: 1},
            // {x: 19, y: 1},
            // {x: 20, y: 1},
            // {x: 21, y: 1},
            // {x: 22, y: 1},
            // {x: 23, y: 1},
            // {x: 24, y: 1},
            // {x: 25, y: 1},
            // {x: 26, y: 1},
            // {x: 27, y: 1},
            // {x: 28, y: 1},
            // {x: 29, y: 1},
            // {x: 30, y: 1},
            // {x: 31, y: 1},
            // {x: 32, y: 1},
            // {x: 33, y: 1},
            // {x: 34, y: 1},
            // {x: 35, y: 1},
            // {x: 36, y: 1},
            // {x: 37, y: 1},
            // {x: 38, y: 1},
            // {x: 39, y: 1},
            // {x: 40, y: 1},
            // {x: 41, y: 1},
            // {x: 42, y: 1},
            // {x: 43, y: 1},
            // {x: 44, y: 1},
            // {x: 45, y: 1},
            // {x: 46, y: 1},
            // {x: 47, y: 1},
            // {x: 48, y: 1},
            // {x: 49, y: 1},
            // {x: 50, y: 1},
            // {x: 51, y: 1},
            // {x: 52, y: 1},
            // {x: 53, y: 1},
            // {x: 54, y: 1},
            // {x: 55, y: 1},
            // {x: 56, y: 1},
            // {x: 57, y: 1},
            // {x: 58, y: 1},
            // {x: 59, y: 1},
            // {x: 60, y: 1},
            // {x: 61, y: 1},
            // {x: 62, y: 1},
            // {x: 63, y: 1},
            // {x: 64, y: 1},
            {x: 65, y: 1},
            {x: 66, y: 1},
            {x: 67, y: 1},
            {x: 68, y: 1},
            {x: 69, y: 1},
            {x: 70, y: 1},
            {x: 71, y: 1},
            {x: 72, y: 1},
            {x: 73, y: 1},
            {x: 74, y: 1},
            {x: 75, y: 1},
            {x: 76, y: 1},
            {x: 77, y: 1},
            {x: 78, y: 1},
            {x: 79, y: 1},
            {x: 80, y: 1},
            {x: 81, y: 1},
            {x: 82, y: 1},
            {x: 83, y: 1},
            {x: 84, y: 1},
            {x: 85, y: 0.75},
            {x: 86, y: 0.5},
            {x: 87, y: 0.25},
            {x: 88, y: 0},
        ],
        sedang :[
            {x: 84, y: 0},
            {x: 85, y: 0.25},
            {x: 86, y: 0.5},
            {x: 87, y: 0.75},
            {x: 88, y: 1},
            {x: 89, y: 1},
            {x: 90, y: 1},
            {x: 91, y: 1},
            {x: 92, y: 1},
            {x: 93, y: 1},
            {x: 94, y: 1},
            {x: 95, y: 1},
            {x: 96, y: 1},
            {x: 97, y: 1},
            {x: 98, y: 1},
            {x: 99, y: 1},
            {x: 100, y: 1},
            {x: 101, y: 1},
            {x: 102, y: 1},
            {x: 103, y: 1},
            {x: 104, y: 1},
            {x: 105, y: 1},
            {x: 106, y: 1},
            {x: 107, y: 1},
            {x: 108, y: 0.75},
            {x: 109, y: 0.5},
            {x: 110, y: 0.25},
            {x: 111, y: 0},
        ],
        tinggi : [
            {x: 107, y: 0},
            {x: 108, y: 0.25},
            {x: 109, y: 0.5},
            {x: 110, y: 0.75},
            {x: 111, y: 1},
            {x: 112, y: 1},
            {x: 113, y: 1},
            {x: 114, y: 1},
            {x: 115, y: 1},
            {x: 116, y: 1},
            {x: 117, y: 1},
            {x: 118, y: 1},
            {x: 119, y: 1},
            {x: 120, y: 1},
            {x: 121, y: 1},
            {x: 122, y: 1},
            {x: 123, y: 1},
            {x: 124, y: 1},
            {x: 125, y: 1},
            {x: 126, y: 1},
            {x: 127, y: 1},
            {x: 128, y: 1},
            {x: 129, y: 1},
            {x: 130, y: 1},
        ]
    };

    return (
        <div className="container">
            <div className="card cardnya">
                <div class="card-header">
                    Fuzzy Logic Kelapa Sawit
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-4">
                            <XYPlot 
                        height={100} 
                        width={100}>
                            <AreaSeries
                                data={charPersediaan.rendah}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charPersediaan.sedang}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charPersediaan.tinggi}
                                opacity={0.5}
                                style={{}}
                            />
                        </XYPlot>
                            </div>
                            <div className="col-sm-4">
                            <XYPlot 
                        height={100} 
                        width={100}>
                            <AreaSeries
                                data={charPermintaan.rendah}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charPermintaan.sedang}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charPermintaan.tinggi}
                                opacity={0.5}
                                style={{}}
                            />
                        </XYPlot>
                            </div>
                            <div className="col-sm-4">
                            <XYPlot 
                        height={100} 
                        width={100}>
                            <AreaSeries
                                data={charProduksi.rendah}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charProduksi.sedang}
                                opacity={0.5}
                                style={{}}
                            />
                            <AreaSeries
                                data={charProduksi.tinggi}
                                opacity={0.5}
                                style={{}}
                            />
                        </XYPlot>
                            </div>

                        </div>
                        
                        <form onSubmit={hitung} className="row text-center p-2">
                            <div className="col-sm-6">
                                <label for="permintaan" className="form-label">Permintaan</label>
                                <input type="number" className="form-control" id="permintaan" placeholder="Permintaan" onChange={(e) => setPermintaan(e.target.value)}/>
                            </div>
                            <div className="col-sm-6">
                                <label for="persediaan" className="form-label">Persediaan</label>
                                <input type="number" className="form-control" id="persediaan" placeholder="persediaan" onChange={(e) => setPersediaan(e.target.value)}/>
                            </div>
                            <div className="text-center mt-2">
                                <button name="btn_proses" className="btn btn-success tproses" type="submit" >PROSES</button>
                            </div>
                        </form>
                        <div className="">
                            <hr />
                            <h3>Input</h3>
                            <h6>Permintaan = {permintaan}<br /></h6>
                            <h6>Persediaan = {persediaan}<br /></h6>
                            <hr />
                        </div>
                    </div>


                    <div className="col-sm-6">

                        {
                            next===1&&(
                                <div className="">
                                    <hr />
                                    <h3>Fuzzy Input</h3>
                                    {/* <h1>{fuzzyInput}</h1> */}
                                    {fuzzyInput && fuzzyInput.map((input, index) => {
                                        var x = input.vl;
                                        var predikat = fuzzy[x];

                                        //document.write(json_encode(input)."<br>");
                                        // document.write(input['in'] + " = [" + input['mu'] + "]<br>");
                                        return (
                                            // <h1>{input['in']} = "["{input['mu']}"]"<br /></h1>
                                            <h6 key={index}>{input.in} = {predikat} |{input.nilai}|</h6>
                                        )
                                    })
                                    }
                                    <button onClick={inferensi_rules}  className="btn btn-success nextnya" type="button">Load</button>
                                </div>
                            )
                        }

                        {
                            next===2&&(
                                <div className="">
                                    <hr />
                                    <h3>Fuzzy Output</h3>
                                    {/* {fuzzyInput && (()=>inferensi_rules())} */}
                                    {/* {fuzzyInput && (<FuzzyOut />)} */}
                                    {
                                    fuzzyOutput && fuzzyOutput.map((output, index) => {
                                        // console.log(output.rules.x)
                                        // setFuzzyOutput([{'rules' : fuzzyRules[result], 'mu' : [set_rules_1[x].x, set_rules_2[y].x, res]}]);

                                        var perminta = output.rules.x[0];
                                        var predikat1 = fuzzy[perminta];
                                        var mu1 = output.mu[0];

                                        var persedia = output.rules.x[1];
                                        var predikat2 = fuzzy[persedia];
                                        var mu2 = output.mu[1];

                                        var peroduk = output.rules.y;
                                        var predikat3 = fuzzy[peroduk];
                                        var mu3 = output.mu[2];
                                        console.log(output)

                                        // document.write("IF persediaan =" + predikat1 + "[" + mu1 + "] AND stok =" + predikat2 + "[" + mu2 + "] AND minat =" + predikat3 + "[" + mu3 + "] THEN rekomendasi = " + predikat4 + "[" + mu4 + "]<br>");
                                        return(
                                            <h6 key={index}>IF permintaan = {predikat1} {mu1} AND  persediaan = {predikat2} "[{mu2}]" THEN produksi = {predikat3} {mu3}<br/></h6>
                                        )
                                    })
                                }
                                    <button onClick={inferensi_adv_rules} className="btn btn-success nextnya" type="button">Load</button>
                                </div>
                            )
                        }
                        {
                            next===3&&(
                                <div className="">
                                     <hr />
                                    {
                                        output.length > 0 && (<Out/>)
                                    }
                                    <button onClick={defuzzyfication} className="btn btn-success nextnya" type="button">Load</button>
                                </div>
                            )
                        }
                        {
                            next===4&&(
                                <div className="">
                                    {
                                        hAkhir &&(
                                            <div className="">
                                                <hr/>
                                                <h6>Rekomendasi = {parseInt(hAkhir)} buah </h6><br/>
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        }

                        <div className="row">
                            <div className="col-sm-6">
                                <button onClick={next!==1&&(()=>setNext(next-1))} className="btn btn-primary nextnya" type="button">Back</button>
                            </div>
                            <div className="col-sm-6">
                                <button onClick={next!==4&&(()=>setNext(next+1))} className="btn btn-primary nextnya" type="button">Next</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Index
