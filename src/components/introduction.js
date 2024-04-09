import moment from "moment";

function Introduction(props) {
    const usia = (() => {
        // Tanggal lahir
        const born = moment(props.kelahiran, 'YYYY-MM-DD');
        const now = moment();
        const buffer = moment.duration(now.diff(born));
        return {
            year: buffer.years(),
            month: buffer.months(),
            day: buffer.days()
        }
    })();

    return (
        <div>
            <h1>Introduction</h1>
            <p>Halo, nama saya adalah : {props.name} ({usia.year}) tahun</p>
            <ul>
                <li>Kelahiran : {props.kelahiran} </li>
                <li>Tahun: {usia.year}</li>
                <li>Bulan: {usia.month}</li>
                <li>Hari: {usia.day}</li>
            </ul>
        </div>
    )
}

export default Introduction;