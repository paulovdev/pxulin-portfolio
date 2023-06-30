import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
const Setup = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [value, setValue] = useState("");
    const setup = [
        { title: "Processador", spec: "INTEL CORE I3-12100F, 3.3GHZ, 4-CORE, 8-THREADS" },
        { title: "Memoria RAM", spec: "TEAM GROUP T-FORCE VULCAN PICHAU, (2X8GB)" },
        { title: "Placa de Video", spec: " RX 6600 CLD 8GB ASRock AMD Radeon" },
        { title: "Placa Mae", spec: "ASUS PRIME H610M-E D4 LGA 1700" },
        { title: "Armazenamento", spec: "SSD 480GB XRAYDISK" },
        { title: "Mouse", spec: " LOGITECH G403 HERO" },
        { title: "Teclado", spec: "REDRAGON KNIGHT K598 RGB" },
        { title: "Monitor", spec: '  AOC 21.5" LED Full HD' },
        { title: "Gabinete", spec: "PICHAU HX300 Glass" },
        { title: "Headset", spec: "HAVIT, 50mm" },
    ];

    const filtered = setup.filter((sea) =>
        sea.title.toLowerCase().includes(value.toLowerCase())
    );

    const handleItemClick = (item) => {
        setSelectedItem(item);
    };
    return (
        <div className="grid-layout">
            <div className="principal">
                <main id='setup'>
                    <h1>Minha Configuração</h1>
                    <p>Configurações do meu computador e periféricos.</p>
                    <div className='styled-setup'>

                        <div className="card-left">

                            <div className='item-list'>

                                <input
                                    type="text"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    placeholder="Pesquisar"
                                />
                                {filtered.length === 0
                                    ? (<li >Nenhum resultado</li>)
                                    : (filtered.map((item) => (<li key={item.title}>
                                        <div id='item' onClick={() => handleItemClick(item)}>
                                            <span>{item.title}</span>
                                            <AiOutlineArrowRight />
                                        </div>
                                    </li>
                                    ))
                                    )}
                            </div>

                        </div>



                        <div className="card-right">
                            <p>{selectedItem ? selectedItem.spec : "Selecione um item ao lado"}</p>
                        </div>

                    </div>
                </main>
            </div>
        </div>
    )
}

export default Setup
