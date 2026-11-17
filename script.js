const btnBukaModal = document.getElementById("bt_Kontak"); 
const elemenModal = document.getElementById("modal"); 
const btnTutupModal = document.getElementById("btnTutupModal");
const bt_tema = document.getElementById("bt_tema_id")
const body = document.querySelector('body');
const div_skill = document.getElementsByClassName("skill-matrix")[0];
const div_project = document.getElementById("project");
const projectCount = document.getElementById("projectCount");
const filterButtons = document.querySelectorAll(".tombol-filter");

let gelap = true;

const skills = [
    "HTML5 Semantic",
    "CSS3 Flexbox",
    "Responsive Design",
    "Media Queries",
    "Chrome DevTools",
    "Git & GitHub",
    "Unity Engine",
    "Godot"
];

const projects = [
    {
        nama: "Profil Pribadi",
        kategori: "HTML",
        deskripsi: "Website profil pribadi",
        link_des: "link??? ini aja di web nya",
        link: ""
    },
    {
        nama: "tictactoe + AI",
        kategori: "JavaScript",
        deskripsi: "game tictactoe dengan AI ultra",
        link_des: "tictaktoe",
        link: "https://normal-player-id.github.io/tik-tak-toeek/"
    },
    {
        nama: "Tabel Jadwal pelajaran",
        kategori: "HTML",
        deskripsi: "Website tabel jadwal cuma tugas sekolah tapi jadi ubnormal",
        link_des: "jadwal pelajaran rada overkill",
        link: "https://normal-player-id.github.io/jatwal-pelajaran/"
    },
    {
        nama: "Portofolio Responsif",
        kategori: "CSS",
        deskripsi: "Website dengan desain responsif atau ini web",
        link_des: "ini web nya",
        link: ""
    },
    {
        nama: "Lima Soal Logika",
        kategori: "JavaScript",
        deskripsi: "Kumpulan soal logika tugas tapi malah jadi ada gui nya padahal cuma perlu console.log",
        link_des: "lima soal logika kali ini di vercel karena di suruh",
        link: "https://ubig-5.vercel.app/"
    }
];



ready();
function ready()
{
    summonSkills();
    filterProjects("Semua");
    update_ui()
}

function buka_modal()
{
    elemenModal.classList.add('show');
}
function tutup_modal()
{
    elemenModal.classList.remove('show');
}

function ganti_tema()
{
    body.classList.toggle('light-mode');
    if (gelap == true)
    {
        gelap = false;
    }
    else if (gelap == false)
    {
        gelap = true;
    }
    update_ui()
}
function update_ui()
{
    if (gelap)
    {
        bt_tema.innerText = "tema cahaya lilahi??";
    }
    else
    {
        bt_tema.innerText = "tema kegelapan?";
    }
}
console.log(div_skill);
function summonSkills() 
{
    for (const skill of skills) 
    {
        const slot = document.createElement("div");

        slot.className = "skill-badge";
        slot.textContent = skill;

        div_skill.appendChild(slot);
    }
}
function summonProjects(data = projects)
{
    div_project.innerHTML = "";
    projectCount.innerText =
    `Menampilkan ${data.length} dari ${projects.length} proyek`;
    for (const project of data)
    {
        const slot = document.createElement("div");

        slot.className = "project-card";
        slot.innerHTML = `
            <h2>${project.nama}</h2>
            <p> ${project.kategori}</p>
            <p>${project.deskripsi}</p>
            <a href="${project.link}" target="_blank">${project.link_des}</a>
        `;
        div_project.appendChild(slot);
    }
}
function filterProjects(tipe = "Semua")
{
    const filtered = tipe == "Semua"
        ? projects
        : projects.filter(project => project.kategori == tipe);

    summonProjects(filtered);
    filterButtons.forEach(button => {
        button.classList.remove("aktif");
    });

    const activeButton = document.getElementById(
        tipe === "Semua" ? "filterSemua" :
        tipe === "HTML" ? "filterHTML" :
        tipe === "CSS" ? "filterCSS" : "filterJS"
    );

    activeButton.classList.add("aktif");
}