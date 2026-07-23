import { PLLData } from "./AlgorithmsData";
import { Table, Td, Th, Tr } from "./Table";

export default function AlgorithmStep3() {
  return (
    <div id="pll" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">PLL</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          Much like the OLL algorithms, these PLL algorithms are presented with
          their accepted names. These are often referred to as permutations or
          perms, e.g. H-perm or Nb-perm.
        </span>

        <div>
          <Table>
            <Tr>
              <Th>Edges only</Th>
            </Tr>
            {PLLData.slice(0, 4).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`pll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Corners only</Th>
            </Tr>
            {PLLData.slice(4, 7).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`pll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Edges and corners</Th>
            </Tr>
            {PLLData.slice(7, 21).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`pll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
