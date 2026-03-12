const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwLiIkAPZPmC2tR34rHbrFws0ZMY_iP49Y-3MIfzBn4F2nzWuUBzuciRlEQVjU3_IknQg/exec"; 
const EBI_EMAIL = "moldabaydamir@gmail.com"; 
const EXAM_MINS = 90;

let examData = {}; 
const regions = ["Abai", "Akmola", "Aktobe", "Almaty", "Atyrau", "East Kazakhstan", "Jetisu", "Karaganda", "Kostanay", "Kyzylorda", "Mangystau", "North Kazakhstan", "Pavlodar", "Turkistan", "Ulytau", "West Kazakhstan", "Zhambyl"];

function saveAns(k, v) { examData[k] = v; }
function saveCheck(k, v) {
    if (!examData[k]) examData[k] = [];
    let i = examData[k].indexOf(v);
    if (i > -1) examData[k].splice(i, 1); else examData[k].push(v);
}

function showScenario(num) {
    const content = document.getElementById('scenario-content');
    document.querySelectorAll('.tab-btn').forEach((b, i) => b.classList.toggle('active', (i+1) === num));

    if (num === 1) {
        content.innerHTML = `
            <h2>Scenario 1: Viral Protease Outbreak</h2>
            <p><strong>Task 1:</strong> Perform a sequence alignment. Based on an identity threshold of 85%, which strains are currently curable using the Highgarden protease inhibitor?</p>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Winterfell')"> Winterfell Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Dorne')"> Dorne Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Gulltown')"> Gulltown Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Braavos')"> Braavos Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Volantis')"> Volantis Strain</label>

            <p><strong>Task 2:</strong> Determine which viral strain contains a different protein domain compared with the others.</p>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Winterfell')"> Winterfell Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Dorne')"> Dorne Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Gulltown')"> Gulltown Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Braavos')"> Braavos Strain</label>
            <label class="mc-option"><input type="checkbox" onchange="saveCheck('s1q1','Volantis')"> Volantis Strain</label>
            
            <p><strong>Task 3:</strong> Calculate the Virulence Score for the following regions:</p>
            <div class="formula-box">$$\\text{Virulence} = \\frac{\\text{Severe Cases}}{\\text{Total Cases}}$$</div>
            <p>Highgarden (450 severe / 5000 total): <input type="text" placeholder="Score..." onchange="saveAns('v1_score', this.value)"></p>
            <p>Winterfell (120 severe / 800 total): <input type="text" placeholder="Score..." onchange="saveAns('v2_score', this.value)"></p>
            <p>Gulltown (60 severe / 390 total): <input type="text" placeholder="Score..." onchange="saveAns('v1_score', this.value)"></p>
            <p>Braavos (72 severe / 450 total): <input type="text" placeholder="Score..." onchange="saveAns('v2_score', this.value)"></p>
            <p>Volantis (75 severe / 430 total): <input type="text" placeholder="Score..." onchange="saveAns('v1_score', this.value)"></p>
            <p>Dorne (168 severe / 410 total): <input type="text" placeholder="Score..." onchange="saveAns('v2_score', this.value)"></p>
            
            <h3>Scenario 1 Sequences</h3>
            <div class="dataset-box">>Highgarden_mRNA\nAUGGCUUACGACUACGAUGACGAUGACGUUGACCUGAUCGACGUUGACGACUACGACGUUGACGACCUGAUCGACGUUGACGACUACGACGAUGACGUUGACGACUACGAUCGACGUUGACGACCUGA\n\n>Winterfell_mRNA\nAUGGCUUACGACUACGAUGACGAUGACGUUGACCUGAUCGACGUUGACGACUACGACGUUGACGACCUGAUCGACGUUGATGACUACGACGAUGACGUUGACGACUACGAUCGACGUUGACGACCUGA\n>Dorne_mRNA\nAUGGCUUACGACUACGAUGACGAUGAUGUUGACCUGAUCGACGUUGACGACUACGACGUUGACGACCUGAUCGACGUUGACGACUACGACGAUGACGUCGACGACUACGAUCGACGUUGACGACCUGA
\n>Gulltown_mRNA\nAUGGCUUACGACUACGAUGACGAUGACGUUGACCUGAUCGAUGUUGACGACUACGACGUUGACGACCUGAUCGACGUUGACGACUACGACGAUGACGUUGACGACUACGAUCGACGUUGACGACCUGA
\n\n>Volantis_mRNA\nAUGGCUUACGACUACGAUGACGAUGACGUUGACCUGAUCGACGUUGACGACUACGACGUUGACGACCUGAUCGACGUUGACGACUACGACGAUGACGUUGACGACUACGAUCGACGUGGACGACCUGA\nBraavos_mRNA\nAUGGCGUAUGACUUCGAUGCCGAUGAUAUUGACAUGAUUGACAUUGAUGACUUCGAUGUUGAUGAUAUUGACAUGGAUGAUGACUUCGAUGAUGCCAUUGAUGACUUCGAAAUUGAUGAUAUUGACAUGA
\n</div>`;
    } 

    else if (num === 2) {
        content.innerHTML = `
            <h2>Scenario 2: Ancient Plant Genomics</h2>
            <p><strong>Task 1:</strong> Use the <b>Build Tree</b> tool to analyze the relationships between Specimen A and Specimens B-F. Which specimen is the most recent common ancestor relative to A?</p>
            <input type="text" placeholder="Enter Specimen Name (e.g., Plant B)" onchange="saveAns('s2_ancestor', this.value)">
            
            <p><strong>Task 2:</strong> Analyze Plant A and Plant D sequences. Identify the domain and the likely photosynthetic pathway (C3 or C4).</p>
            <table>
                <tr><th>Plant</th><th>Domain (e.g., RuBisCO)</th><th>Pathway (C3/C4)</th></tr>
                <tr><td>Plant A</td><td><input type="text" onchange="saveAns('s2_da', this.value)"></td><td><input type="text" onchange="saveAns('s2_pa', this.value)"></td></tr>
                <tr><td>Plant D</td><td><input type="text" onchange="saveAns('s2_dd', this.value)"></td><td><input type="text" onchange="saveAns('s2_pd', this.value)"></td></tr>
            </table>
            <h3>Scenario 2 Genomic Data</h3>
            <div class="dataset-box">>Plant_A\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCT
\n\n>Plant_B\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTGGCTAGCT
\n>Plant_C\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTGGCTAGCT
\n>Plant_D\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTGGCTAGCT
\n>Plant_E\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTGGCTAGCT
\n>Plant_F\nATGCGTACGTTACGATCGATCGATCGTACGTAGCTAGCTACGATCGATCGTACGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTAGCTAGCTAGCTACGATCGATCGTAGCTAGCTACGATCGATCGTGGCTAGCT
</div>`;
    }

    else if (num === 3) {
        content.innerHTML = `
            <h2>Scenario 3: Transposons & Oncogenesis</h2>
            <div class="formula-box">$$V = \\left(\\frac{1}{\\text{TSS dist}}\\right) \\times \\text{Activity} \\times \\text{Specificity}$$</div>
            <p><strong>Task 1:</strong> Identify the Transposable Element (TE) type (L1, Alu, or HERV) and calculate the V Score for the following sequences found in tumor biopsies.</p>
            <table>
                <tr><th>Sequence</th><th>TE Type</th><th>Calculated V Score</th></tr>
                <tr><td>Seq 1 (Lung)</td><td><input type="text" onchange="saveAns('s3_t1', this.value)"></td><td><input type="text" onchange="saveAns('s3_v1', this.value)"></td></tr>
                <tr><td>Seq 2 (Breast)</td><td><input type="text" onchange="saveAns('s3_t2', this.value)"></td><td><input type="text" onchange="saveAns('s3_v2', this.value)"></td></tr>
            </table>
            
            <p><strong>Task 2:</strong> Why are hypomethylated regions in cancer genomes particularly dangerous regarding TEs?</p>
            <label class="mc-option"><input type="radio" name="s3q" onclick="saveAns('s3_mc','C')"> C. They allow the transcription of internal TE promoters, leading to insertional mutagenesis.</label>
            <label class="mc-option"><input type="radio" name="s3q" onclick="saveAns('s3_mc','A')"> A. They increase the speed of DNA polymerase, causing replication errors.</label>
            
            <h3>Scenario 3 Transposon Sequences</h3>
            <div class="dataset-box">>Seq_1_Lung\nTTTTAAAGGATGAGGCAGTGGATTTCTGAGACAGGTCTCGCTGATCACTTTTTGAGACAGGGTCTTGCTCTGTCACCCAGGCTGGAGTGCAGTGGCACGATCTTGGCTCACTGCAACCTCCGCCTCCTGGGTTCAAGCGATTCTCCTGCCTCAGCCTCCCAAGTAGCTGGGACTACAGGTGCCCGCCACCACGCCTGGTAAAAAAA\n\n>Seq_2_Breast\nGGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGTTTGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAATACAAAAATTAGCCGGGCATGGTGGCGGGCGCCTGTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAGAAT\n>Seq_2_Pancreatic\nGGCCGGGCGCGGTGGCTCACGCCTGTAATCCCAGCACTTTGGGAGGCCGAGGCGGGCGGATCACCTGAGGTCAGGAGTTTGAGACCAGCCTGGCCAACATGGTGAAACCCCGTCTCTACTAAAAATACAAAAATTAGCCGGGCATGGTGGCGGGCGCCTGTAATCCCAGCTACTCGGGAGGCTGAGGCAGGAGAAT</div>`;
    }

    else if (num === 4) {
        content.innerHTML = `
            <h2>Scenario 4: BRCA1 Pedigree Analysis</h2>
            <p><strong>Task A: Variant Identification</strong></p>
            <p>Perform an alignment of the BRCA1 exon 11 sequences. Identify the nucleotide change, its position, and whether it is synonymous or non-synonymous.</p>
            <table>
                <tr><th>Mutation Position</th><th>Type (e.g. G>A)</th><th>Effect</th></tr>
                <tr><td><input type="text" onchange="saveAns('s4_pos', this.value)"></td><td><input type="text" onchange="saveAns('s4_type', this.value)"></td><td><input type="text" onchange="saveAns('s4_eff', this.value)"></td></tr>
            </table>

            <p><strong>Task B: Mode of Inheritance</strong></p>
            <p>Based on the pedigree data below, determine the most likely mode of inheritance:</p>
            <select onchange="saveAns('s4_mode', this.value)" style="width:100%; padding:10px; margin-bottom:10px;">
                <option value="">-- Select Mode --</option>
                <option value="AD">Autosomal Dominant (Incomplete Penetrance)</option>
                <option value="AR">Autosomal Recessive</option>
                <option value="XD">X-linked Dominant</option>
            </select>
            <textarea placeholder="Justify your answer based on transmission..." onchange="saveAns('s4_just', this.value)" style="height:60px;"></textarea>

            <p><strong>Task C: Penetrance Calculation</strong></p>
            <div class="formula-box">$$\\text{Penetrance} = \\frac{\\text{Affected Carriers}}{\\text{Total Carriers}}$$</div>
            <p>Provide the final estimated penetrance percentage: <input type="text" onchange="saveAns('s4_pen_val', this.value)"></p>

            <h3>BRCA1 Dataset</h3>
            <div class="dataset-box">>I-1_Male\nATGAAAGGTTTGGAGTCTGCTGACCTGCTTCCAGGAGCTGATGCTGCTG\n>I-2_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG\n>II-1_Female\nATGAAAGGTTTGGAGTCTGCTGACCTACTTCCAGGAGCTGATGCTGCTG</div>`;
    }

    content.scrollTo(0,0);
    if (window.MathJax) MathJax.typesetPromise();
}

// --- TOOL LOGIC (STAYED THE SAME) ---
function runTranscription() { document.getElementById('result-display').innerText = document.getElementById('seq-input').value.toUpperCase().replace(/T/g, "U").replace(/[^AUGC\n>]/g, ""); }
function runTranslation() {
    const map = {"GCU":"A","GCC":"A","GCA":"A","GCG":"A","UGU":"C","UGC":"C","GAU":"D","GAC":"D","GAA":"E","GAG":"E","UUU":"F","UUC":"F","GGU":"G","GGC":"G","GGA":"G","GGG":"G","CAU":"H","CAC":"H","AUU":"I","AUC":"I","AUA":"I","AAA":"K","AAG":"K","UUA":"L","UUG":"L","CUU":"L","CUC":"L","CUA":"L","CUG":"L","AUG":"M","AAU":"N","AAC":"N","CCU":"P","CCC":"P","CCA":"P","CCG":"P","CAA":"Q","CAG":"Q","CGU":"R","CGC":"R","CGA":"R","CGG":"R","AGA":"R","AGG":"R","UCU":"S","UCC":"S","UCA":"S","UCG":"S","AGU":"S","AGC":"S","ACU":"T","ACC":"T","ACA":"T","ACG":"T","GUU":"V","GUC":"V","GUA":"V","GUG":"V","UGG":"W","UAU":"Y","UAC":"Y"};
    let input = document.getElementById('seq-input').value.toUpperCase().replace(/[^AUGC]/g, "");
    let prot = "";
    for(let i=0; i<input.length-2; i+=3) prot += (map[input.substr(i,3)] || "?");
    document.getElementById('result-display').innerText = "Protein:\n" + prot;
}
function runSimpleAlignment() {
    const b = document.getElementById('seq-input').value.split('>').filter(x=>x.trim());
    if(b.length<2) return alert("Paste 2 FASTA sequences");
    const s1 = b[0].split('\n').slice(1).join('').replace(/\s/g,'');
    const s2 = b[1].split('\n').slice(1).join('').replace(/\s/g,'');
    let m = 0; let L = Math.max(s1.length, s2.length);
    for(let i=0; i<L; i++) if(s1[i]===s2[i]) m++;
    document.getElementById('result-display').innerText = `Identity: ${((m/L)*100).toFixed(2)}%`;
}
function runPhyloTree() {
    const b = document.getElementById('seq-input').value.split('>').filter(x=>x.trim());
    let res = "SNP Distance Matrix:\n";
    let n = b.map(x=>x.split('\n')[0].substring(0,10));
    let s = b.map(x=>x.split('\n').slice(1).join('').replace(/\s/g,''));
    res += " ".repeat(12) + n.join("  ") + "\n";
    s.forEach((s1,i)=>{
        res += n[i].padEnd(12);
        s.forEach((s2,j)=>{
            let d=0; let L=Math.min(s1.length, s2.length);
            for(let k=0; k<L; k++) if(s1[k]!==s2[k]) d++;
            res += d.toString().padEnd(12);
        });
        res += "\n";
    });
    document.getElementById('result-display').innerText = res;
}
async function runDomainAnalysis() {
    const seq = document.getElementById('seq-input').value.trim();
    if(seq.startsWith(">")) return alert("Raw protein sequence only (no header)");
    const out = document.getElementById('result-display');
    out.innerText = "Connecting to EBI REST Services...";
    try {
        const r = await fetch('https://www.ebi.ac.uk/Tools/services/rest/iprscan5/run', {
            method:'POST', headers:{'Content-Type':'application/x-www-form-urlencoded'},
            body: new URLSearchParams({'email':EBI_EMAIL, 'sequence':seq})
        });
        const id = await r.text();
        const p = setInterval(async () => {
            const st = await (await fetch(`https://www.ebi.ac.uk/Tools/services/rest/iprscan5/status/${id}`)).text();
            out.innerText = "Job ID: " + id + "\nStatus: " + st;
            if(st === "FINISHED") {
                clearInterval(p);
                out.innerText = await (await fetch(`https://www.ebi.ac.uk/Tools/services/rest/iprscan5/result/${id}/txt`)).text();
            }
        }, 5000);
    } catch(e) { out.innerText = "API connectivity error."; }
}

function startExam() {
    if(!document.getElementById('student-name').value) return alert("Please enter your name");
    document.getElementById('login-screen').classList.add('hidden');
    document.getElementById('exam-interface').classList.remove('hidden');
    document.getElementById('display-name').innerText = document.getElementById('student-name').value;
    document.getElementById('display-region').innerText = document.getElementById('student-region').value;
    showScenario(1);
    let time = EXAM_MINS * 60;
    setInterval(() => {
        let m = Math.floor(time / 60), s = time % 60;
        document.getElementById('timer-display').innerText = `${m}:${s < 10 ? '0'+s : s}`;
        if (time-- <= 0) finalSubmit(true);
    }, 1000);
}

function downloadAnswers() {
    const blob = new Blob([JSON.stringify(examData, null, 2)], {type:"text/plain"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `Exam_Backup_${document.getElementById('student-name').value}.txt`;
    a.click();
}

async function finalSubmit(auto = false) {
    if(!auto && !confirm("Are you sure you want to submit the exam?")) return;
    downloadAnswers();
    try {
        await fetch(GOOGLE_SCRIPT_URL, {method:'POST', mode:'no-cors', body:JSON.stringify(examData)});
        alert("Exam successfully submitted!");
    } catch(e) { alert("Server error. Please email your backup file to the instructor."); }
}

window.onload = () => {
    const sel = document.getElementById('student-region');
    regions.forEach(r => { let o = document.createElement('option'); o.value = o.innerText = r; sel.appendChild(o); });
};