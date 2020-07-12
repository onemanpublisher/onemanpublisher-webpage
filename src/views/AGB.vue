<template>
    <div>
        <section class="section section-lg section-shaped overflow-hidden my-0">
            <div class="shape shape-style-1 shape-default shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-components pb-0" id="section-components">
            <div class="container">
                <vue-cookie-accept-decline
                    :ref="'myPanel1'"
                    :elementId="'myPanel1'"
                    :debug="false"
                    :position="'bottom-left'"
                    :type="'floating'"
                    :disableDecline="false"
                    :transitionName="'slideFromBottom'"
                    @status="cookieStatus"
                    @clickedAccept="cookieClickedAccept"
                    @clickedDecline="cookieClickedDecline"
                    @removedCookie="cookieRemovedCookie">

                    <!-- Optional -->
                    <div slot="message">
                        Unsere Seite nutzt 🍪, um dir ein besseres Surferlebnis zu ermöglichen! <a href="/#/datenschutz" target="_blank">Erfahre mehr...</a>
                    </div>

                    <!-- Optional -->
                    <div slot="declineContent">
                        OPT OUT
                    </div>

                    <!-- Optional -->
                    <div slot="acceptContent">
                        OKAY!
                    </div>
                </vue-cookie-accept-decline>
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <!-- Basic elements -->
                        <h2 class="mb-5"><span>Allgemeine Geschäftsbedingungen</span></h2>
                        <li><a href="#V1"><strong>I Anbieterinformationen</strong></a></li>
                        <li><a href="#V2"><strong>II Allgemeine Geschäftsbedignungen</strong></a></li>
                        <li><a href="#V3"><strong>III Widerrufsbelehrung</strong></a></li>

                        <h4><a name="V1"></a><strong>Anbieterinformationen</strong></h4><br>
                        <b>onemanpublisher GbR</b><br>
                        Ochsenweg 50<br>
                        24941 Flensburg<br>
                        Telefon: 0461 - 1507830<br>
                        E-Mail: info [at] onemanpublisher.com<br>
                        Geschäftsführer: Sascha Dolgow, Luca Stephan Kohls<br>
                        Umsatzsteuer-Identifikationsnummer: beantragt<br>
                        <br>
                        <h4><a name="V2"></a><strong>Allgemeine Geschäftsbedingungen der onemanpublisher GbR</strong></h4><br>
                        <b>1. Geltungsbereich, Änderungen</b><br>
                        <p>1.1.  Diese allgemeinen Geschäftsbedingungen (AGB) der onemanpublisher GbR (nachfolgend OMP) gelten für alle Leistungen der OMP.</p>
                        <p>1.2.  Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer ist eine natürliche oder juristishce Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
                        <p>1.3.  Gegenüber Unternehmern gilt: Verwendet der Unternehmer entgegenstehende oder ergänzende Allgemeine Geschäftsbedignungen, wird deren Geltung hiermit widersprochen; sie werden nur dann Vertragsbestandteil, wenn wir dem ausdrücklich zugestimmt haben.</p>
                        <P>1.4.  Ergänzend zu diesen AGB von OMP geltend für einzelne Produkte zusätzlich spezielle Bedignungen. Diese zusätzlichen Bedingungen gelten auch, wenn das entsprechende Produkt lediglich Teil eines vom Kunden gebuchten Pakets ist, welches auch andere Leistungen enthält.</p>
                        <p>1.5.  OMP kann diese AGB mit einer angemessenen Ankündigungsfrist ändern. Widerspricht der Kunde der Änderung nicht innerhalb einer von OMP gesetzten First, gilt die Änderung als genehmigt. OMP weist den Kunden in der Änderungs-Ankündigung darauf hin, dass die Änderung wirksam wird, wenn er nicht binnen der gesetzten Frist widerspricht.</p>
                        <p>1.6.  OMP kann Informationen und Erklärungen, die das Vertragsverhältnis betreffen, an die E-Mail-Adresse des Kunden schicken.</p>
                        <p>1.7.  Der Kaufvertrag kommt zustande mit onemanpubliisher GbR, Ochsenweg 50, 24941 Flensburg, Tel.: 0461 - 1507830, E-Mail: info@onemanpublisher.com. <br>
                            <br>
                            Verträge über die Erbringung von Dienstleistungen werden ebenfalls mit der onemanpublisher GbR, sowie im Einzelfall ggf. ergänzend mit weiteren Vertragspartnern geschlossen. Die Einzelnheiten werden bei dem jeweiligen Produkt erläutert.</p>
                        <b>2. Leistungen der OMP</b><br>
                        <p>2.1.  Der Leistungsumfang der einzelnen Leistungen ergibt sich aus der zum Zeitpunkt der Bestellung aktuellen Beschreibung der Leistungen.</p>
                        <p>2.2.  Die Verfügbarkeit der OMP Server und der Datenwege bis zum Übergabepunkt in das Internet beträgt mindestens 99 % im Jahresmittel. Hiervon ausgenommen sind Zeiten, in denen die entsprechenden Server aufgrund von technischen oder sonstigen Problemen, die nicht im Einflussbereich von OMP liegen (höhere Gewalt, Verschulden Dritter, etc.), nicht zu erreich sind.</p>
                        <p>2.3.  OMP führt an ihren System zur Sicherheit des Netzbetriebes, zur Aufrechterhaltung der Netzintegrität, der Interoperabilität der Dienste und des Datenschutzes regelmäßig Wartungsarbeiten durch. Zu diesem Zwecke kann sie ihre Leistungen unter Berücksichtigung der Belange des Kunden vorübergehend einstellen oder beschränken, soweit wichtige Gründe dies rechtfertigen. OMP wird die Wartungsarbeiten, sowie dies möglich ist, in nutzungsarmen Zeiten durchführen. Sollten längere vorübergehende Leistungseinstellungen- oder beschränkungen erforderlich sein, wird OMP den Kunden über Art, Ausmaß und Dauer der Beeinträchtigung zuvor unterrichten, soweit dies den Umständen nach objektiv möglich ist und die Unterrichtung die Beseitigung bereits eingetretener Unterbrechnungen nicht verzögern würde.</p>
                        <p>2.4.  OMP kann ihre Leistungen ändern, soweit dies unter Berücksichtigung der Interessen des Kunden und von OMP für den Kunden zumutbar ist.</p>
                        <p>2.5.  Um die Sicherheit, Vertraulichkeit, Verfügbarkeit, Integrität und Belastbarkeit der Systeme, Netze, Programme, Anwendungen und Daten von OMP sowie von Dritten dauerhaft zu gewährleisten, kann OMP Programme, Anwendungen, Skripte, Apps, Dateien und Links ganz oder teilweise abschalten oder ändern inklusive der Vornahme von Updates, Upgrades oder des Bringens auf einen neuen Versionsstand, soweit dies auch nach Abwägung der Interessen anderer Kunden für den Kunden zumutbar ist. Dies gilt insbesondere für Programme, Anwendungen, Skripte und Apps für die der Hersteller- oder Community-Support abgelaufen ist.</p>
                        <P>2.6.  Soweit feste IP-Adressen zur Verfügung gestellt werden, behält sich das OMP vor, die dem Kunden zugewiesene IP-Adresse zu ändern, sofern dies auch technischen oder rechtlichen Gründen erforderlich ist.</p>
                        <p>2.7.  Soweit erforderlich und zumutbar wirkt der Kunden bei einer Änderung z.B. durch eine erneute Eingabe von Zugangsdaten oder einfache Umstellung seiner Systeme mit.</p>
                        <p>2.8.  Eine Nutzungsüberlassung von Produkten (ganz oder teilweise) an anonyme Dritte ist untersagt.</p>
                        <p>2.9.  Eine Nutzung von Produkten zur Bereitstellung von Anonymisierungsdiensten ist ausgeschlossen.</p>
                        <p>2.10. Bei Mängel gelten die gesetzlichen Mängelgewährleistungsregelungen.</p>
                        <p>2.11. Für einige zusätzliche Dienste entstehen OMP Kosten, die wir an unsere Kunden in Form einer Servicegebühr weitergeben. Dabei handelt es sich um Dienste wie z.B. der Vertragsübergabe, der Reaktivierung eines Auftrags oder des erneuten Rechnungsversands.</p>
                        <b>3. Urheberrechte, Lizenzen, Eigentumsvorbehalt</b><br>
                        <p>3.1.  OMP räumt den Kunden an den zur Verfügung gestellten Programmen, Anwendungen, Skripten, Apps ein zeitlich auf die Laufzeit des zugehörigen Vertragsverhältnis beschränktes einfaches Nutzungsrecht ein. Es ist nicht gestattet, Dritten Nutzungsrechte einzuräumen. Insbesondere eine Veräußerung ist nicht erlaubt. Der Kunde wird Kopien von überlassener Software nach Beendigung des Vertragsverhältnisses nicht weiter verwenden und löschen. Für Open Source Software gilt diese Bestimmungen nicht, es finden ausschließlich die zugehörigen Lizenzbedingungen Anwendung.</p>
                        <p>3.2.  Im Übrigen gelten die Lizenzbestimmungen der jeweiligen Hersteller.</p>
                        <p>3.3.  Die von OMP zur Verfügung gestellten Inhalte, Texte, Bilder, Animationen, Film- und Tonmaterialien kann der Kunde während der Vertragslaufzeit ausschließlich zur Gestaltung der vertragsgegenständlichen Internetpräsenz nutzen. Es ist nicht gestattet, Dritten Nutzungsrechte einzuräumen. Nach Beendigung des Vertrages sind die Materialien zu löschen.</p>
                        <p>3.4.  Sofern der Kunde auf den von OMP zur Verfügung gestellten Diensten Lizenzen u.ä. selbst einrichtet, verwaltet oder verteilt, ist er zur korrekten Lizensierung verpflichtet. Dies gilt insbesondere dann, wenn er technische Parameter verwaltet, die maßgeblich für den Umfang der Lizenzierung sind, beispielweise die Anzahl genutzer Cores oder die Anzahl von zugriffsberechtigten Nutzern.</p>
                        <p>3.5.  Hardware und sonstige Waren bleiben bis zur vollständigen Bezahlung der entsprechenden Rechnung Eigentum der OMP.</p>
                        <b>4. Zahlungsbedingungen</b><br>
                        <p>Bei uns stehen Ihnen grundsätzlich die folgenden Zahlungsarten zur Verfügung:</p>
    
                        <p>4.1.  Sie zahlen den Rechnungsbetrag nach Erhalt der Rechnung in der Rechnungsversandmail per Überweisung auf unser dort angegebenes Bankkonto. Zahlungen sind fällig innerhalb von 14 Tagen ab Erhalt der Rechnung. Ein eventuell eingeräumter Skonto kann auf der Rechnung ausgewiesen sein.</p>
                        <p>4.2.  Bei Dienstleistungen die eine dauerhafte Laufzeit haben, haben Sie zusätzlich die Möglichkeit, den Preis auch in monatlichen Raten per SEPA-Lastschrift zu bezaheln. Mit Abgabe der Bestellung erteilen SIe usn ein SEPA-Lastschriftmandat. Über das Datum der Kontobelastung werden wir Sie informieren (sog. Pre-Notification). Mit Einrireichung des SEPA-Lastschriftmandats fordern wir unsere Bank zur Einleitung der Zahlungstransaktion auf. Die Zahlungstransaktion wird automatisch durchgeführt und ihr Konto belastet.</p>
                        <p>4.3.  OMP kann die Preise zum Beginn der nächsten Vertragslaufzeit mit einer angemessenen Ankündigungsfrist von mindestens einem Monat ändern. Widerspricht der Kunde der Änderung nicht innerhalb einer von OMP gesetzten angemessenen Frist, gilt die Änderung als genehmigt. OMP weist den Kunden in der Änderungs-Ankündigung darauf hin, dass die Änderung wirksam wird, wenn er nicht widerspricht.</p>
                        <p>4.4.  Gegen Forderungen der OMP kann der Kunde nur mit unbestrittenen oder rechtskräftig festgestellten Gegenansprüchen aufrechnen. Ausgenommen davon sind Ansprüche auf Rückabwicklung nach Widerruf des Vertrags nach § 355 BGB.</p>
                        <p>4.5.  Bis zur Leistung der fälligen Vergütung durch den Kunden ist OMP im Rahmen der Billigkeit berechtigt, Ihre Dienste zu sperren.</p>
                        <p>4.6.  Der Kunde kommt auch ohne Mahnung in Verzug, wenn er den fälligen Betrag nicht innerhalb von 14 Kalendertagen ab Rechnungszugang leistet. Maßgeblich ist, dass dieser Betrag innerhalb dieser Frist bei OMP auf dem in der Rechnung angegebenen Konto eingeht.</p>
                        <p>4.7.  Kommt der Kunde mit der Bezahlung einer monatlichen Vergütung in Verzug, kann OMP das Vertragsverhältnis nach einer erfolglosen Mahnung mit angemessener Zahlungsfrist aus wichtigem Grund ohne Einhaltung einer Frist kündigen. Ein wichtiger Grund zur fristlosen Kündigung für OMP liegt insbesondere auch dann vor, wenn ein Insolvenzverfahren über das Vermögen des Kunden beantragt, eröffnet oder die Eröffnung mangels Masse abgelehnt wird.</p>
                        <p>4.8.  Bei Zahlungsverzug kann OMP eine Erstattung des hieraus entstehenden Schadens verlangen. Für Kosten, die wegen Rücklastschriften entstehen, welche der Kunde zu vertreten hat, kann OMP ebenfalls Erstattung verlangen.</p>
                        <b>5. Pflichtung des Kunden</b><br>
                        <p>5.1.  Der Kunde ist verpflichtet, notwendige Daten vollständig und richtig anzugeben und Änderungen unverzüglich mitzuteilen. Dies gilt insbesondere für die Adressdaten, die Bankverbindung und die E-Mail-Adresse.</p>
                        <p>5.2.  Der Kunde verpflichtet sich, zugeteilte Passwörter unverzüglich zu ändern. Er ist verantwortlich, sichere Passwörter zu wählen und zu verwenden. Der Kunde verwaltet seine Passwörter und sonstige Zugangsdaten sorgfältig und hält sie geheim. Er ist verpflichtet, auch solche Leistungen zu bezahlen, die Dritte über seine Zugangsdaten und Passwörter nutzen oder bestellen, soweit er dies zu vertreten hat.</p>
                        <p>5.3.  Der Kunde ist verpflichtet, seine Systeme, Programme, Anwendungen, Skripte, Apps, Dateien, Links und sonstige Bestandteile nach den aktuellen Best Practices oder Branchenstandards der Informationssicherheit so einzurichten, dass die Sicherheit, Vertraulichkeit, Verfügbarkeit, Integrität und Belastbarkeit der Systeme, Netze, Programme, Anwendungen, Skripte, Apps, Dateien und Daten von OMP , anderen OMP Kunden sowie von Dritten nicht beeinträchtigt oder gefährdet werden.</p>
                        <p>5.4.  Bei bestimmten Servern hat der Kunde allein Administratorrechte. OMP kann diese Server nicht verwalten. Es obliegt daher dem Kunden, Sicherheitssoftware zu installieren, sich regelmäßig über bekannt werdende Sicherheitslücken zu informieren und bekannte Sicherheitslücken zu schließen. Die Installation von Wartungsprogrammen oder sonstiger Programme, die OMP zur Verfügung stellt oder empfiehlt, entbindet den Kunden nicht von dieser Pflicht.</p>
                        <p>5.5.  Der Kunde erstellt Sicherungskopien von allen Daten. Ist eine Wiederherstellung der Daten auf den Systemen von OMP notwendig, wird der Kunde die betreffenden Datenbestände nochmals unentgeltlich auf den Server der OMP übertragen.</p>
                        <p>5.6.  Der Kunde stellt sicher, dass seine Domain(s) und seine Inhalte weder gesetzliche Vorschriften noch Rechte Dritter verletzen.<br>
                        <br>
                        Der Kunde verpflichtet sich weiterhin, keine Domains oder Inhalte zum Abruf anzubieten, die extremistischer (insbesondere rechtsextremistischer) Natur sind oder pornographische, kommerziell erotische, gewalttätige, gewaltverherrlichende, rassistische, diskriminierende, jugendgefährdende oder volksverhetzende Inhalte darstellen, noch Domains oder Inhalte, die zu Straftaten aufrufen oder Anleitungen hierfür darstellen. Dies gilt auch, wenn solche Inhalte durch Hyperlinks oder sonstige Verbindungen, die der Kunde auf Seiten Dritter setzt, zugänglich gemacht werden.</p>
                        <p>5.7.  Die Nutzung der OMP Dienste zur Verbreitung von Schadprogrammen oder missbräuchlich agierenden Botnetzen, zur Versendung von Spam-Nachrichten oder für Phishing, für Marken- und Urheberrechtsverletzungen, bzw. -piraterie, betrügerische oder irreführende Praktiken, Produktfälschung oder sonstige Verhaltensweisen, die gegen anwendbares Recht verstoßen, ist untersagt.</p>
                        <p>5.8.  Der Kunde schließt mit OMP eine Vereinbarung zur Auftragsverarbeitung nach Art. 28 DSGVO ab, sobald OMP in seinem Auftrag personenbezogene Daten verarbeitet.</p>
                        <b>6. Rechtsfolgen bei Rechtsverletzungen und Gefährdungen</b><br>
                        <p>6.1.  OMP kann Dienste sperren, wenn Systeme abweichend vom Regelbetriebsverhalten agieren oder reagieren und dadurch die Sicherheit, Vertraulichkeit, Verfügbarkeit, Integrität und Belastbarkeit der Systeme, Netze, Programme, Anwendungen, Skripte, Apps, Dateien und Daten von OMP , anderen OMP Kunden sowie von Dritten im Sinne von Ziff. 5.3. beeinträchtigt werden. Dies gilt auch dann, wenn OMP aufgrund objektiver Anhaltspunkte den Verdacht einer solchen Beeinträchtigung hat. Es wird klargestellt, dass diese Regelung auch für so genannte Denial of Service Attacken (nachfolgend DoS-Attacken) gilt, die der Kunde über seinen Server ausführt oder für die der Server des Kunden von Dritten benutzt wird. Bei einer vorsätzlichen Handlung des Kunden, kann OMP das Vertragsverhältnis fristlos kündigen.</p>
                        <p>6.2.  Wird ein Server wiederholt Ziel von DoS-Attacken und ist eine Wiederholung zu erwarten, kann OMP das Vertragsverhältnis nach einer Abmahnung fristlos kündigen, wenn es für OMP keine zumutbare Möglichkeit gibt, die zu erwartenden künftigen DoS-Attacken oder deren Auswirkung auf andere Systeme zu unterbinden.</p>
                        <p>6.3.  Machen Dritte glaubhaft, dass Inhalte oder Domains ihre Rechte verletzen, oder erscheint es aufgrund objektiver Anhaltspunkte als wahrscheinlich, dass durch Domains oder Inhalte Rechtsvorschriften verletzt werden, kann OMP die Inhalte sperren, solange die Rechtsverletzung oder der Streit mit dem Dritten über die Rechtsverletzung andauert.</p>
                        <p>6.4.  Wird die mögliche Rechtsverletzung durch eine Domain begangen, kann OMP auch Maßnahmen ergreifen, die die Domain unerreichbar machen. In Fällen, in denen die Rechtsverletzung durch eine Domain aufgrund objektiver Anhaltspunkte als sicher erscheint, kann OMP das Vertragsverhältnis fristlos kündigen.</p>
                        <p>6.5.  Bei Anbieten und Darstellen von Inhalten entsprechend Ziff. 5.7. kann OMP statt lediglich eine Sperrung vorzunehmen auch eine fristlose Kündigung aussprechen.</p>
                        <p>6.6.  Verstößt der Kunde gegen ein Verbot aus Ziff. 5.7., kann OMP die Dienste sperren.</p>
                        <p>6.7.  OMP kann aufgrund objektiver Kriterien die an ihre Kunden gerichteten E-Mails ablehnen, wenn Tatsachen die Annahme rechtfertigen, dass eine E-Mail Schadsoftware enthält, die Absenderinformationen falsch oder verschleiert sind oder es sich um unaufgeforderte oder verschleierte kommerzielle Kommunikation handelt.</p>
                        <p>6.8.  Der Entgeltanspruch von OMP besteht fort, solange aus vorstehenden Gründen eine Sperrung eines Dienstes vorgenommen wurde.</p>
                        <p>6.9.  OMP kann bei schuldhaften Verstößen des Kunden gegen Pflichten aus Ziff. 5 vom Kunden einen pauschalierten Schadensersatz in Höhe des nach dem gewöhnlichen Lauf der Dinge zu erwartenden Schadens verlangen. Den Parteien bleibt der Nachweis eines ausgebliebenen, geringeren oder höheren Schadens vorbehalten.</p>
                        <b>7. Freistellung</b><br>
                        <p>Der Kunde ersetzt OMP alle Schäden, die aus einer Verletzung der vorstehenden Regelungen entstehen, soweit er dies zu vertreten hat. Der Schadensersatz erfasst auch die angemessenen Kosten einer notwendigen Rechtsverteidigung. OMP informiert den Kunden unverzüglich, wenn sie selbst oder Dritte entsprechende Ansprüche geltend machen und gibt dem Kunden Gelegenheit zur Stellungnahme.</p>
                        <b>8. Haftung der OMP</b><br>
                        <p>8.1.  Für Schäden haftet OMP nur bei Vorsatz und grober Fahrlässigkeit von OMP oder einer ihrer Erfüllungsgehilfen. Verletzt OMP oder einer ihrer Erfüllungsgehilfen eine wesentliche Vertragspflicht (Kardinalpflicht) in einer den Vertragszweck gefährdenden Weise, ist die Haftung auf den typischen Schaden beschränkt, den OMP bei Vertragsschluss vernünftigerweise vorhersehen konnte, es sei denn die Pflichtverletzung geschieht vorsätzlich oder grob fahrlässig.</p>
                        <p>8.2.  Diese Beschränkung gilt nicht bei einer Verletzung von Leben, Körper und/oder Gesundheit und bei einer Haftung nach dem Produkthaftungsgesetz.</p>
                        <p>8.3.  Soweit der Kunde Unternehmer, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist, ist die Haftung außer im Falle von Vorsatz und grober Fahrlässigkeit beschränkt auf die Summe der vertraglichen Entgelte, die der Kunde für den Zeitraum von zwei Jahren vor Eintritt des schädigenden Ereignisses im Rahmen des konkreten Vertragsverhältnisses an OMP gezahlt hat.</p>
                        <b>9. Widerrufsrecht</b><br>
                        <p>Verbrauchern steht das gesetzliche Widerrufsrecht, wie in der Widerrufsbelehrung beschrieben, zu. Unternehmern wird kein freiwilliges Widerrufsrecht eingeräumt.</p>
                        <b>10. Vertragslaufzeit, Kündigung</b><br>
                        <p>10.1 Soweit sich aus dem konkreten Angebot nichts anderes ergibt, verlängert sich der Vertrag jeweils automatisch um die erste Vertragslaufzeit, solange er nicht von einer Partei mit einer Frist von einem Monat zum jeweiligen Laufzeitende gekündigt wird. Ist die erste Vertragslaufzeit länger als ein Jahr, betragen die Verlängerungszeiträume jeweils ein Jahr.</p>
                        <p>10.2 Beauftragt der Kunde bei einer Kündigung die Löschung einer Domain nicht mit, kann OMP die Domain nach Vertragsende und Ablauf einer angemessenen Frist an die zuständige Vergabestelle zurückgeben. OMP weist hiermit darauf hin, dass in diesem Falle eine Vergütungspflicht des Kunden gegenüber der Vergabestelle bestehen bleiben kann.</p>
                        <p>10.3 Alternativ kann OMP die Domain nach Ablauf einer angemessenen Frist auch löschen lassen.</p>
                        <p>10.4 Beendet OMP den Vertrag berechtigt wegen Zahlungsverzuges oder aus wichtigem Grund, kann OMP nach angemessener Frist die Löschung der betroffenen Domains veranlassen, sofern der Kunde keine andere Weisung erteilt.</p>
                        <b>11. Gerichsstand, anwendbares Recht, außergerichtliche Streibeilegung</b><br>
                        <p>11.1. Ausschließlicher Gerichtsstand für alle Streitigkeiten aus oder anlässlich dieses Vertrages ist Flensburg , soweit der Kunde Kaufmann, eine juristische Person des öffentlichen Rechts oder ein öffentlich-rechtliches Sondervermögen ist. Für alle Ansprüche gleich welcher Art, die aus oder anlässlich dieses Vertrages entstehen, gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des Einheitlichen UN-Kaufrechts (CISG).</p>
                        <p>11.2. Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie <a href="https://ec.europa.eu/consumers/odr/">hier</a> finden. Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.</p>
                        <p>11.3. Wir sind freiwillig bereit, an einem außergerichtlichen Schlichtungsverfahren teilzunehmen. Zuständig ist die Universalschlichtungsstelle des Bundes am Zentrum für Schlichtung e.V., Straßburger Straße 8, 77694 Kehl am Rhein, <a href="https://www.verbraucher-schlichter.de/">www.universalschlichtungsstelle.de.</a></p>
                        <h4><a name="V3"></a><strong>Widerrufsbelehrung</strong></h4><br>
                        <b>Widerrufsrecht</b><br>
                        <p>Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
                        <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (onemanpublisher GbR, Ochsenweg 50, 29491 Flensburg, Tel.: 0461 - 1507830, E-Mail: info@onemanpublisher.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.<p>
                        <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                        <b>Folgen des Widerrufs</b><br>
                        <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                        <p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>
                        <b>2. Widerrufsbelehrung für digitale Inhalte</b><br>
                        <p>Bei Bestellung digitaler Inhalte (z.B. Handbücher im PDF-Format) haben Verbraucher ein vierzehntägiges Widerrufsrecht.</p>
                        <b>Widerrufsrecht</b>
                        <p>Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
                        <p>Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.</p>
                        <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns (onemanpublisher GbR, Ochsenweg 50, 29491 Flensburg, Tel.: 0461 - 1507830, E-Mail: info@onemanpublisher.com) mittels einer eindeutigen Erklärung (z.B. ein mit der Post versandter Brief, Telefax oder E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das beigefügte Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                        <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                        <b>Folgen des Widerrufs</b><br>
                        <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene, günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                        <b>3. Muster-Widerrufsformular</b><br>
                        --- Anlage Muster-Widerrufsformular --- <br><br>
                        Muster-Widerrufsformular<br><br>
                        (Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)<br><br>
                        -  An <br><br>
                        onemanpublisher GbR<br>
                        Ochsenweg 50<br>
                        24941 Flensburg<br>
                        E-Mail: info@onemanpublisher.com<br><br>
                        -  Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*)/ die Erbringung der folgenden Dienstleistung (*)<br>
                        -  Bestellt am (*)/erhalten am (*)<br>
                        -  Name des/der Verbraucher(s)<br>
                        -  Anschrift des/der Verbraucher(s)<br>
                        -  Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)<br>
                        -  Datum<br>
                         <br>
                        (*) Unzutreffendes streichen.
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
  name: "Impressum",
  components: {}
};
</script>
<style>
</style>
