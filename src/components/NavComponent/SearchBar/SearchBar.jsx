import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from '../../../pages/Home/Home';
import About from '../../../pages/About/About';
import Skills from '../../../pages/Skills/Skills';
import Contact from '../../../pages/Contact/Contact';
import Setup from '../../../pages/Setup/Setup';
import { FaSearch } from 'react-icons/fa';
import { SearchForm, SearchInput } from './SearchBar.styles';
import { ButtonSearch, ButtonInput } from '../../Global/Button'

const pages = [
    {
        path: '/',
        component: Home,
        content: `Home
        Desenvolvedor Frontend, Produtor Musical e Criador de Jogos.
        Olá, eu sou o Paulo Vitor, atualmente trabalho como Desenvolvedor de Software Frontend. Também sou produtor musical e criador de jogos.

        Eu me especializo em construir aplicações web avançadas com foco em desempenho. Utilizo ferramentas como Visual Studio Code, PyCharm e outras para o desenvolvimento web.

        Para a produção musical, confio no FL Studio, e quando se trata de criação de jogos, utilizo o Construct.


        Projetos`,
    },
    {
        path: '/about',
        component: About,
        content: `Sobre mim :
        Como falamos, sou um desenvolvedor front-end apaixonado por música e jogos. Além de criar interfaces incríveis para a web, também dedico meu tempo livre à produção musical e à exploração do mundo dos jogos.

        Adoro trabalhar em projetos desafiadores e mergulhar em textos longos e envolventes. Minha criatividade e habilidade técnicas me permitem criar experiências digitais únicas e atraentes para os usuários. Sempre busco aprimorar meu conhecimento e estar atualizado com as últimas tendências do mundo do desenvolvimento web.

        Se você está em busca de um profissional versátil, comprometido e apaixonado pelo que faz, estou pronto para embarcar em novas aventuras e contribuir para o sucesso do seu projeto. Vamos trabalhar juntos e transformar ideias em realidade!

        Imagem Foto`,
    },
    {
        path: '/skills',
        component: Skills,
        content: `Skills Minhas Habilidades :
        Desenvolvimento Front-end
        Design Responsivo
        Desenvolvimento Back-end
        Desenvolvimento React
        Produção musical
        Desenvolvimento de jogos`,
    },
    {
        path: '/contact',
        component: Contact,
        content: `Contato:
        Me mande uma mensagem!

        Digite seu nome
        Digite seu email
        Digite sua mensagem...
        Enviar
        fudevil123@gmail.com

        +55 (21) 96991-5011

        Paulo Vitor

        Brasil - RJ`,
    },
    {
        path: '/setup',
        component: Setup,
        content: `Setup Configuração do PC :
        Processador: INTEL CORE I3-12100F, 3.3GHZ, 4-CORE, 8-THREADS

        Memória RAM: TEAM GROUP T-FORCE VULCAN PICHAU, (2X8GB)

        Placa de Vídeo: RX 6600 CLD 8G ASRock AMD Radeon

        Placa-Mãe: ASUS PRIME H610M-E D4 LGA 1700

        Armazenamento: SSD 480GB XRAYDISK

        Periféricos:
        Mouse: LOGITECH G403 HERO

        Teclado: REDRAGON KNIGHT K598 RGB

        Monitor: AOC 21.5" LED Full HD

        Gabinete: PICHAU HX300 Glass

        Headset: HAVIT, 50mm`,
    },
];

function SearchBar() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [showSearchInput, setShowSearchInput] = useState(false);

    const handleSearch = (e) => {
        setShowSearchInput(!showSearchInput);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        e.preventDefault();
        const foundPage = pages.find((page) =>
            page.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (foundPage) {
            navigate(foundPage.path);
        }
        setSearchTerm('');
    };

    const handleSearchButtonClick = () => {
        setShowSearchInput(!showSearchInput);
        setSearchTerm('');
    };

    return (
        <SearchForm showinput={showSearchInput ? 'true' : 'false'} onSubmit={handleSearch}>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                {showSearchInput && (
                    <div style={{ position: 'relative' }}>
                        <SearchInput
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Pesquise pela página"
                            autoComplete="on"
                        />

                        <ButtonInput
                            type="submit"
                            onSubmit={handleSearch}
                            title='Clique aqui para pesquisar'
                        >
                            <FaSearch
                                style={{ color: 'var(--text-color)' }} />
                        </ButtonInput>
                    </div>
                )}
                <ButtonSearch
                    type="button"
                    onClick={handleSearchButtonClick}
                    title={showSearchInput ? 'Fechar caixa de pesquisa' : 'Abrir caixa de pesquisa'}
                    aria-label={showSearchInput ? 'Fechar caixa de pesquisa' : 'Abrir caixa de pesquisa'}
                >
                    <FaSearch size={20} />
                </ButtonSearch>
            </div>
        </SearchForm>
    );
}

export default SearchBar;
