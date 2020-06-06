import React from 'react';

export function Desc() {
    return (
        <>
            <div className="accordion w-75 m-auto" id="accordion">
                <div className="card">
                    <div className="card-header bg-primary" style={{cursor: "pointer"}} id="rulesHeading" data-toggle="collapse" data-target="#rules" aria-expanded="true" aria-controls="rules">
                        <h4 className="m-0">
                            A játkszabály
                        </h4>
                    </div>
                    <div id="rules" className="collapse" aria-labelledby="rulesHeading" data-parent="#accordion">
                        <div className="card-body">
                            <div class="card mb-3 text-justify bg-secondary text-light">
                                <div className="card-body">
                                    <h5 className="card-title">Stratego</h5>
                                    <p className="card-text">A Stratego egy izgalmas stratégiai társasjáték. A játékosok
                                    a hadvezérek szerepébe bújva eljátszhatják a történelem nagy csatáit.
                                    A csapatok taktikus felállítása és a stratégiai manőverek megvalósítása
                                    folyamatos döntésre készteti a játékosokat a csata megnyeréséért.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">A CSATA:</h5>
                                    <p className="card-text">A Csatában a játékosok az összes játékfigurával játszanak. A játéktáblát az asztal közepére teszik
                                    úgy, ahogy a Párbajban olvasható. A játékosok magukhoz veszik az egy-egy színhez tartozó figurákat
                                    és felállítják őket a játéktábla feléjük eső alsó 4 sorában. A figurák felállításával a játékosok
                                    a játéktábla alsó 4 sorában mind a 40 mezőt elfoglalják. A csapatokat úgy kell felállítaniuk, hogy az
                                    ellenfél ne láthassa a figurák rangjelzéseit. A Csata célja, az ellenfél zászlójának megszerzése. Ezért
                                    célszerű a játékosoknak a Zászlóikat a hátsó sorok valamelyikében elrejteniük. Minden játékosnak
                                    6 Bombája van, amivel a Zászlóját védheti. A figurák rangjelzése egy számot is tartalmaz:
                                    a legmagasabb rangú a Tábornagy száma a 10-es, a Tábornok a 9-es, és így tovább az 1-es számot
                                    viselő Kémig. Csak a Bombáknak és a Zászlónak nincsen számuk, mivel ezeknek a figuráknak külön
                                    feladatuk van a játék során. Az alacsonyabb és a magasabb rangjelzésű figurák taktikus elhelyezése
                                    nagyon fontos a játék későbbi menete szempontjából. A figurák lehelyezésekor ügyelni kell arra,
                                    hogy az ellenfelek ne hatolhassanak be könnyedén egymás területeire, de nehezen nyerheti meg az
                                    a játékot, aki csak védekezési taktikát folytat.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">A JÁTÉK MENETE:</h5>
                                    <p className="card-text">A játékot a piros játékos kezdi. A játék további
                                    menetében a játékosok felváltva lépnek. A soron levő
                                    játékosnak lépnie kell egyet egy saját figurájával. A
                                    játékos figurájával egy üres mezőre léphet, vagy egy
                                    olyan mezőre, amin az ellenfél egyik figurája áll. Ezt
                                    nevezzük támadásnak. Az éppen soron lévő játékos
                                    mindig csak egy figurával léphet. Nem léphet olyan
                                    mezőre és nem ugorhat át olyan mezőt, amelyiken egy
                                    saját figurája áll!</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">LÉPÉS A SAJÁT FIGURÁVAL:</h5>
                                    <p className="card-text">A saját figurával egy mezőt lehet lépni tetszőleges irányba: jobbra,
                                    balra, előre, hátra.<br />
                                    Kivétel azonban ez alól a szabály alól a felderítő (2)!<br />
                                    A játékos egy figurával sem léphet átlós irányba, és nem ugorhat át
                                    másik figurát.<br />
                                    Minden mezőn csak egy figura állhat.<br />
                                    A játéktábla közepén lévő tavak mezőire lépni, illetve a tavakat
                                    átugrani nem lehet!</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">IDE-ODA LÉPTETÉS:</h5>
                                    <p className="card-text">Ugyanazon a két mezőn legfeljebb háromszor léptethetjük ide-oda
                                    a figurákat, függetlenül attól, hogy a figura veszélybe van-e vagy sem.
                                    Legkésőbb a negyedik lépés során egy harmadik mezőre kell lépni.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">TÖBB MEZŐ SZABÁLY:</h5>
                                    <p className="card-text">Nem engedélyezett folyamatosan egy, vagy több ellenséges figura egymást követő lépések során történő
                                    veszélyeztetése. Ilyen esetben, ha a veszélyeztetett figurával a játékos több, mint két mezővel tovább lépett, a
                                    támadó játékos figurájával nem üldözheti tovább a figurát. Tehát nem engedélyezett egy figura ismételt
                                    veszélyeztetése, ha az több mint két mezőn keresztül menekül. Ilyen esetben nincs jelentősége annak, hogy a
                                    figurák rangjelzése ismert –e, vagy sem.<br />
                                    A zászló és a bomba nem mozdítható el arról a helyről, ahova a játék elején felállítottuk őket.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">A FELDERÍTŐK (2):</h5>
                                    <p className="card-text">A felderítőkre különleges szabályok érvényesek. A felderítők tetszőleges számú üres mezőt
                                    átugorhatnak előre, hátra, jobbra, vagy balra; a tavakon és más figurákon azonban ők sem
                                    ugorhatnak át. A felderítők tehát több mezőt is léphetnek a játéktáblán és ugyanazon lépésen
                                    belül támadhatnak is. Példa: A felderítő átugrik négy mezőt, s egyúttal megtámad
                                    (megkoccint) egy ellenséges figurát.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">ELLENSÉGES FIGURA MEGTÁMADÁSA:</h5>
                                    <p className="card-text">Ellenséges figurát csak valamelyik szomszédos mezőről támadhatunk meg (kivétel a felderítő (2)!). Ha a két
                                    mezőnek csak a sarka érintkezik, akkor a támadás nem lehetséges. A támadó játékos kezébe veszi azt a figurát,
                                    amelyikkel a támadást végre akarja hajtani, és hozzákoccintja a megtámadott figurához. Ezután először a
                                    támadó mutatja meg a kezében levő figura rangját (vagy számát), majd a megtámadott. A magasabb rangú
                                    figura a győztes, az alacsonyabb rangú figurát le kell venni a tábláról.<br />
                                    Ha a támadó nyer, akkor az ő figurája lép a legyőzött figura által elhagyott mezőre.<br />
                                    Ha a megtámadott nyer, akkor figurája ott marad, ahol eddig állt.<br />
                                    Ha a két figura azonos rangú, akkor mindketten elesnek, tehát mindkettőt le kell venni a tábláról.<br />
                                    Egyik játékos sem köteles támadni, tehát bármennyi ideig állhatnak egymással szomszédos mezőn.<br />
                                    Támadás után a támadást megnyerő figurát úgy kell a játékfelületre felállítani, hogy az ellenfél ne láthassa
                                    annak a rangjelzését. Ezért fontos, hogy a játékosok megjegyezzék az egyszer már felfedett figurák rangjelzését.
                                    A jegyzetelés bármilyen formája tilos!</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">A KATONAI RANGFOKOZATOK (MELYIK FIGURA AZ ERŐSEBB?):</h5>
                                    <p className="card-text">Alapszabály, hogy a magasabb rangú figura üti az alacsonyabb rangút. A tábornagy (10) a legmagasabb rangú,
                                    tehát minden más figurát üt a tábornoktól (9) a kémig (1).</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">KÜLÖNLEGES ESETEK:</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">1. TÁBORNAGY (10):</h6>
                                    <p className="card-text">A tábornagy (10) üti a tábornokot (9) és az összes alacsonyabb rangú figurát. Ám a kém (1) mégis ütheti! Rajta
                                    kívül csak a bombák okozhatják a tábornagy vesztét, ha véletlenül megtámad egyet.</p>
                                    <h6 class="card-subtitle mb-2 text-muted">2. BOMBÁK:</h6>
                                    <p className="card-text">A bombákat csak az aknászok (3) képesek ártalmatlanná tenni. Ha a támadó más figurával támad meg egy
                                    bombát, vereséget szenved, amit a bomba tulajdonosa „bumm!” kiáltással tudat vele. Ha az aknásznak sikerült
                                    ártalmatlanná tennie egy bombát, akkor leveszi a játéktábláról, és a helyére lép.</p>
                                    <h6 class="card-subtitle mb-2 text-muted">3. A KÉM (1):</h6>
                                    <p className="card-text">A kém (1) a legalacsonyabb rangú figura, ezért minden más figura üti. Van azonban egy különleges képessége:
                                    ha ő maga támadja meg a tábornagyot, akkor győz, és a legmagasabb rangú tiszt elesik. Vigyázat! Ha a
                                    tábornagy (10) támadja meg a kémet, akkor a kém (1) esik el.</p>
                                    <h6 class="card-subtitle mb-2 text-muted">4. A ZÁSZLÓ:</h6>
                                    <p className="card-text">A zászlót bármelyik mozgó figura megszerezheti, akár a nagy távokat átlépő felderítő is.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">A JÁTÉK VÉGE:</h5>
                                    <p className="card-text">A játék akkor ér véget, ha az egyik játékos megszerzi az ellenfele zászlóját, illetve mozgásképtelenné teszi az
                                    ellenséget. Amelyik csapatból már csupán a bombák és a zászló maradt meg, kénytelen megadni magát.</p>
                                </div>
                            </div>
                            <div class="card mb-3 text-justify bg-light">
                                <div className="card-body">
                                    <h5 className="card-title">STRATÉGIA ÉS TAKTIKA:</h5>
                                    <p className="card-text">
                                        <ul>
                                            <li>
                                                A játék végkimenetele döntően függhet az alapfelállástól. Mivel a zászlónak központi szerepe van,
                                                gondoskodni kell a védelméről. Ha bombákkal vesszük körül a zászlót, akkor csak aknászok férkőzhetnek a
                                                közelébe. Megtéveszthetjük azonban az ellenséget, ha a többi bombát szándékosan máshol állítjuk fel.
                                            </li>
                                            <li>
                                                Abban az esetben, ha több bombát is az első sorba állítunk fel, ezek a saját figuráinkat is akadályozzák a
                                                mozgásban, hiszen a bombákat a játék végéig nem lehet elmozdítani.
                                            </li>
                                            <li>
                                                Az első sorba kerülhetnek a felderítők (2) és néhány magas rangú figura. A felderítők kipuhatolják az ellenség
                                                erejét, a magas rangú tisztek pedig egyaránt alkalmasak a védekezésre és a támadásra. Ne tegyük azonban
                                                az összes felderítőt előre, hiszen az ő tudásukra a játék végén is szükség van.
                                            </li>
                                            <li>
                                                Az aknászokat (3) jól osszuk el, és inkább hátulra állítsuk őket, hiszen rájuk is a játék végén hárulnak fontos
                                                feladatok.
                                            </li>
                                            <li>
                                                A kémre (1) is érdemes odafigyelni, mert ő az egyetlen figura, aki a tábornagynak (10) méltó ellenfele lehet.
                                                </li>
                                            <li>
                                                Nagyon csábító egy magasabb rangú figurával behatolni az ellenfél területére és ott egyszerűen
                                                megtámadni a figurákat, de óvatosnak kell lenni, mert aki elveszíti a magasabb rangú figuráit, könnyen
                                                elveszítheti a játékot is.
                                            </li>
                                            <li>
                                                Abban az esetben, ha egy tábornagy (10) ismertté válik, a tábornok (9) minden rizikó nélkül támadhatja meg
                                                a már mozgatott figurákat.
                                            </li>
                                            <li>
                                                Gondoljon arra, hogy a bombákat nem lehet elmozdítani, ezért a játék kezdetekor igyekezzen minél kevesebb
                                                figurát mozgásba hozni, így ellenfele nehezebben jön rá, melyek lehetnek az ön bombái.
                                            </li>
                                            <li>
                                                És még egy ötlet: A leütött figurákat helyezzük magunk mellé, így mindig áttekintést szerezhetünk arról, hogy
                                                milyen figurák vannak még játékban.
                                            </li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                            <div className="row justify-content-sm-center border rounded mx-auto">
                                <div className="w-100">A katonai rangfokozatok</div>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/zaszlo.png" alt="zászló" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">zászló<br />1x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/tabornagy.png" alt="tábornagy" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">tábornagy<br />1x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/tabornok.png" alt="tábornok" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">tábornok<br />1x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/ezredes.png" alt="ezredes" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">ezredes<br />2x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/ornagy.png" alt="őrnagy" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">őrnagy<br />3x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/kapitany.png" alt="kapitány" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">kapitány<br />4x</figcaption>
                                </figure>
                                <div className="w-100"></div>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/fohadnagy.png" alt="főhadnagy" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">főhadnagy<br />4x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/ormester.png" alt="őrmester" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">őrmester<br />4x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/aknasz.png" alt="aknász" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">aknász<br />5x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/felderito.png" alt="felderítő" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">felderítő<br />8x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/kem.png" alt="kém" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">kém<br />1x</figcaption>
                                </figure>
                                <figure className="col-auto p-1 m-2">
                                    <img src="./assets/rankings/bomba.png" alt="bomba" className="border border-dark rounded" />
                                    <figcaption className="figure-caption text-dark">bomba<br />6x</figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}