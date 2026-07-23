import { Table, Th, Td, Tr } from "./Table";
import { F2LData } from "./AlgorithmsData";

export default function AlgorithmStep1() {
  return (
    <div id="f2l" className="text-md max-w-5xl text-justify pt-5">
      <h2 className=" text-2xl sm:text-3xl font-semibold">F2L</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          If you've read the How to be better at F2L section of my speedcubing
          guide, you'll know exactly how I feel about relying on this table
          instead of intuition. I have presented them anyway so you can see
          optimal solutions to all the F2L cases.
        </span>

        <div>
          <Table>
            <Tr>
              <Th>1. Basic cases</Th>
            </Tr>
            {F2LData.slice(0, 4).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>2. Corner and edge in top</Th>
            </Tr>
            {F2LData.slice(4, 16).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>3. Corner pointing up, edge in top</Th>
            </Tr>
            {F2LData.slice(16, 24).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>4. Corner in top, edge in middle</Th>
            </Tr>
            {F2LData.slice(24, 30).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>5. Corner in bottom, edge in top</Th>
            </Tr>
            {F2LData.slice(30, 36).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>6. Corner in bottom, edge in middle</Th>
            </Tr>
            {F2LData.slice(36, 41).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`f2l${data.id}`}
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
