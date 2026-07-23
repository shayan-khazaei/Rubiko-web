import { OLLData } from "./AlgorithmsData";
import { Table, Td, Th, Tr } from "./Table";

export default function AlgorithmStep2() {
  return (
    <div id="oll" className="text-md max-w-5xl text-justify pt-5">
      <h2 className="text-2xl sm:text-3xl font-semibold">OLL</h2>
      <div className="flex flex-col gap-4 pt-5">
        <span>
          The OLL algorithms here are numbered using the accepted order found on
          the speedsolving.com wiki (and elsewhere online), so you can always
          find an alternative to a specific algorithm should you wish. I have
          chosen these ones because they heavily use three different triggers,
          which I feel allows for easier memorisation. Simply learn the three
          triggers, and you nearly know most of the algorithms already. For the
          algorithms that don't use these triggers, I have bracketed them to
          show how I might perform them in sections.
        </span>

        <div>
          <Table>
            <Tr>
              <Th>Crosses</Th>
            </Tr>
            {OLLData.slice(0, 7).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Dots</Th>
            </Tr>
            {OLLData.slice(7, 15).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>All Corners</Th>
            </Tr>
            {OLLData.slice(15, 17).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Line</Th>
            </Tr>
            {OLLData.slice(17, 21).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Ts</Th>
            </Tr>
            {OLLData.slice(21, 23).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Zs</Th>
            </Tr>
            {OLLData.slice(23, 25).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Big Ls</Th>
            </Tr>
            {OLLData.slice(25, 29).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Cs</Th>
            </Tr>
            {OLLData.slice(29, 31).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Ws</Th>
            </Tr>
            {OLLData.slice(31, 33).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Ps</Th>
            </Tr>
            {OLLData.slice(33, 37).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Squares</Th>
            </Tr>
            {OLLData.slice(37, 41).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Little Ls</Th>
            </Tr>
            {OLLData.slice(41, 47).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
                    className="w-[80px]"
                  />
                  <span>{data.algorithms}</span>
                </Td>
              </Tr>
            ))}
          </Table>
          <Table>
            <Tr>
              <Th>Other shapes</Th>
            </Tr>
            {OLLData.slice(47, 57).map((data) => (
              <Tr>
                <Td>
                  <img
                    src={data.image}
                    alt={`oll${data.id}`}
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
