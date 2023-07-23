import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import IConsulta from "../../types/IConsultas";
import styled from "@emotion/styled";

const CelulaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const LinhaEstilizada = styled(TableRow)(() => ({

    [`&:nth-of-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }

}))


function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <LinhaEstilizada>
                            <CelulaEstilizada>Data</CelulaEstilizada>
                            <CelulaEstilizada>Horário</CelulaEstilizada>
                            <CelulaEstilizada>Profissional</CelulaEstilizada>
                            <CelulaEstilizada>Especialidade</CelulaEstilizada>
                            <CelulaEstilizada>Paciente</CelulaEstilizada>
                            <CelulaEstilizada>Modalidade</CelulaEstilizada>
                        </LinhaEstilizada>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((item) => {
                            return (
                                <LinhaEstilizada>
                                    <CelulaEstilizada component="th" scope="row">22/03/2022</CelulaEstilizada>
                                    <CelulaEstilizada>{new Date(item.data).toLocaleDateString() ?? ''}</CelulaEstilizada>
                                    <CelulaEstilizada>{item.profissional[0].nome ?? ''}</CelulaEstilizada>
                                    <CelulaEstilizada>{item.profissional[0].especialidade ?? ''}</CelulaEstilizada>
                                    <CelulaEstilizada>{item.paciente ?? ''}</CelulaEstilizada>
                                    <CelulaEstilizada>{item.modalidade ?? ''}</CelulaEstilizada>
                                </LinhaEstilizada>
                            )
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;