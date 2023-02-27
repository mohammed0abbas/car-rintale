import {useState} from 'react'


const provinces = [
    "Al-Anbar",
    "Al-Muthanna",
    "Al-Qadisiyah",
    "As-Sulaymaniyah",
    "Babil",
    "Baghdad",
    "Basra",
    "Dhi Qar",
    "Diyala",
    "Duhok",
    "Erbil",
    "Karbala",
    "Kirkuk",
    "Maysan",
    "Najaf",
    "Ninawa",
    "Salah ad-Din",
    "Wasit",
    "Halabja"
];

export default function Form() {

    const [passport, setPassport] = useState(null);
    const [certificate, setCertificate] = useState(null);
    const [name, setName] = useState('');
    const [selectedProvince, setSelectedProvince] = useState("");
    const [show, setShow] = useState('citizen')
    const [id, setId] = useState('');
    const [residence, setResidence] = useState('');
    const [driving, setDriving] = useState('');
    const [pic, setPic] = useState('');
    const [tpic, setTPic] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [tphoneNumber, setTPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [taddress, setTAddress] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    const handlePassportChange = (event) => {
        setPassport(event.target.files[0]);
    };

    const handleCertificateChange = (event) => {
        setCertificate(event.target.files[0]);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleResidenceChange = (e) => {
        setResidence(e.target.value);
    };

    const handleDrivingChange = (e) => {
        setDriving(e.target.value);
    };

    const handlePicChange = (e) => {
        setPic(e.target.value);
    };
    const handleTPicChange = (e) => {
        setTPic(e.target.value);
    };


    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };
    const handleTPhoneNumberChange = (e) => {
        setTPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const handleTAddressChange = (e) => {
        setTAddress(e.target.value);
    };

    function handleChange(event) {
        setSelectedProvince(event.target.value);
    }

    function handleOptionChange(event) {
        setShow(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setIsSubmitted(true);
        if (show === 'citizen') {
            if (!id || !residence || !driving || !pic || !phoneNumber || !address || !selectedProvince && show === 'citizen') {
                return;
            }
        }
        if (show === 'tourist') {

            if (!passport || !certificate || !name || !tpic || !tphoneNumber || !taddress) {
                return;
            }
        }
        setLoading(true);
        // implement your logic here
    }

    return (
        <div className="m-5">


            <div className="w-50 max-w-lg mx-auto mb-4">
                <label className="text-left text-uppercase text-gray-700 font-weight-bold small mb-1"
                       htmlFor="option-select">Are You?</label>
                <select id="option-select"
                        className="form-control bg-gray-200 border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight bg-white"
                        value={show} onChange={handleOptionChange}>
                    
                    <option value="citizen">Iraqi Citizen</option>
                    <option value="tourist">Tourist</option>
                </select>
            </div>

            {loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) :
                <div>
                    {show === 'citizen' ?
                        <form className="w-100 max-w-3xl mx-auto container">
                            <div className="d-flex flex-wrap justify-content-between gap-4 mb-4 row">
                                <div className="w-50 col">
                                    <label
                                        className="text-left text-uppercase text-gray-700 font-weight-bold small mb-1"
                                        htmlFor="id">ID</label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight bg-white"
                                        id="id" type="file" onChange={handleIdChange}/>
                                    {!id && isSubmitted ? (
                                        <p className="text-danger small">Please fill out this field.</p>
                                    ) : ''}
                                    <label
                                        className="text-left text-uppercase text-gray-700 font-weight-bold small mb-1"
                                        htmlFor="residence">Residence Card</label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight bg-white"
                                        id="residence" type="file" onChange={handleResidenceChange}/>
                                    {!residence && isSubmitted ? (
                                        <p className="text-danger small">Please fill out this field.</p>
                                    ) : ''}
                                    <label
                                        className="text-left text-uppercase text-gray-700 font-weight-bold small mb-1"
                                        htmlFor="driving">Driving License</label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight bg-white"
                                        id="driving" type="file" onChange={handleDrivingChange}/>
                                    {!driving && isSubmitted ? (
                                        <p className="text-danger small">Please fill out this field.</p>
                                    ) : ''}
                                    <label
                                        className="text-left text-uppercase text-gray-700 font-weight-bold small mb-1"
                                        htmlFor="pic">Picture of You</label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight bg-white"
                                        id="pic" type="file" onChange={handlePicChange}/>
                                    {!pic && isSubmitted ? (
                                        <p className="text-danger small">Please fill out this field.</p>
                                    ) : ''}
                                </div>

                                <div className="col-md-6 col">
                                    <label className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                           htmlFor="province-select">Select Province</label>
                                    <select id="province-select"
                                            className="form-select bg-gray-200 border border-gray-200 mb-3 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none bg-white border-gray-500"
                                            value={selectedProvince} onChange={handleChange}>
                                        <option value="" className="text-center">Province</option>
                                        {provinces.map((province) => (
                                            <option key={province} value={province}>
                                                {province}
                                            </option>
                                        ))}
                                    </select>
                                    {!selectedProvince && isSubmitted ? (
                                        <p className="text-danger text-xs italic">Please fill out this field.</p>
                                    ) : ''}
                                    <label className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                           htmlFor="phone-number">Phone Number</label>
                                    <input onChange={handlePhoneNumberChange}
                                           className="form-control bg-gray-200 mb-3 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none bg-white border-gray-500"
                                           id="phone-number" type="text" placeholder="+964-xxx-xxx-xxxx"/>
                                    {!phoneNumber && isSubmitted ? (
                                        <p className="text-danger text-xs italic">Please fill out this field.</p>
                                    ) : ''}
                                    <div>
                                        <label
                                            className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="address">Address</label>
                                        <input onChange={handleAddressChange}
                                               className="form-control bg-gray-200 mb-3 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none bg-white border-gray-500"
                                               id="address" type="text" placeholder="Address"/>
                                        {!address && isSubmitted ? (
                                            <p className="text-danger text-xs italic">Please fill out this field.</p>
                                        ) : ''}
                                    </div>
                                    <button onClick={handleSubmit}
                                            className="btn btn-warning w-100 mt-3 hover:bg-yellow-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="button">Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        : ''}
                    {show === 'tourist' ?
                        <form className="w-full max-w-3xl mx-auto">
                            <div
                                className="d-flex flex-wrap flex-nowrap justify-content-between align-items-baseline gap-3 mb-4">
                                <div className="col-md-6">
                                    <label
                                        className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="grid-first-name">
                                        Passport
                                    </label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
                                        id="passport"
                                        type="file"
                                        placeholder="Jane"
                                        onChange={handlePassportChange}
                                    />
                                    {!passport && isSubmitted ? (
                                        <p className="text-danger text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    ) : ''}
                                    <label
                                        className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="residence">
                                        international certificate
                                    </label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
                                        id="cer"
                                        type="file"
                                        onChange={handleCertificateChange}
                                    />
                                    {!certificate && isSubmitted ? (
                                        <p className="text-danger text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    ) : ''}
                                    <label
                                        className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="pic">
                                        Picture of you
                                    </label>
                                    <input
                                        className="form-control bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight"
                                        id="pic"
                                        type="file"
                                        onChange={handleTPicChange}
                                    />
                                    {!tpic && isSubmitted ? (
                                        <p className="text-danger text-xs italic">
                                            Please fill out this field.
                                        </p>
                                    ) : ''}
                                </div>
                                <div className="col-6">
                                    <label className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                           htmlFor="name">Name</label>
                                    <input onChange={handleNameChange}
                                           className="form-control mb-3 py-3 px-4 bg-white border rounded border-gray-200 text-gray-700 bg-gray-200 focus:border-gray-500"
                                           type="text" id="name" placeholder="Abbas"/>
                                        {!name && isSubmitted ? (
                                            <p className="text-danger text-xs italic">Please fill out this field.</p>
                                        ) : ''}
                                        <label
                                            className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-last-name">Phone Number</label>
                                        <input onChange={handleTPhoneNumberChange}
                                               className="form-control mb-3 py-3 px-4 bg-white border rounded border-gray-200 text-gray-700 bg-gray-200 focus:border-gray-500"
                                               type="text" id="grid-last-name" placeholder="+964-xxx-xxx-xxxx"/>
                                            {!tphoneNumber && isSubmitted ? (
                                                <p className="text-danger text-xs italic">Please fill out this
                                                    field.</p>
                                            ) : ''}
                                            <label
                                                className="form-label text-uppercase text-gray-700 text-xs font-bold mb-2"
                                                htmlFor="address">Address</label>
                                            <input onChange={handleTAddressChange}
                                                   className="form-control mb-5 py-3 px-4 bg-white border rounded border-gray-200 text-gray-700 bg-gray-200 focus:border-gray-500"
                                                   type="text" id="address" placeholder="Address"/>
                                                {!taddress && isSubmitted ? (
                                                    <p className="text-danger text-xs italic">Please fill out this
                                                        field.</p>
                                                ) : ''}
                                                <button onClick={handleSubmit}
                                                        className="btn btn-warning w-100 mt-3 font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                                        type="button">Submit
                                                </button>
                                </div>
                            </div>
                        </form>

                        : ''}
                </div>
            }
        </div>
    )
}


