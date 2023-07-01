import React, { useState } from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from 'framer-motion';
import './Setup.css'
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

    const translateAnimation = {
        initial: { opacity: 0.1, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    }

    const rightAnimation = {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    }
    const leftAnimation = {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
    }

    return (
        <main id='setup'>
            <motion.h1 {...translateAnimation}
            >
                Meu Setup<span id="mySpan">.</span>
            </motion.h1>

            <motion.p {...translateAnimation}
                transition={{ delay: 0.1 }}
            >Configurações do meu computador e periféricos.
            </motion.p>
            <div className='styled-setup'>

                <motion.div {...translateAnimation} className="card-left"
                >
                    <div className='item-list'>

                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Pesquisar"
                        />

                        {filtered.length === 0 ? (
                            <motion.li key="no-result" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                Nenhum resultado
                            </motion.li>
                        ) : (
                            filtered.map((item) => (
                                <motion.li
                                    key={item.title} {...rightAnimation}
                                >
                                    <div id='item' onClick={() => handleItemClick(item)}>
                                        <span>{item.title}</span>
                                        <AiOutlineArrowRight />
                                    </div>
                                </motion.li>
                            ))
                        )}

                    </div>
                </motion.div>

                <motion.div {...leftAnimation}

                    className="card-right">

                    <p>{selectedItem ? selectedItem.spec : "Selecione um item ao lado"}</p>

                </motion.div>

            </div>
        </main >
    );
};

export default Setup;