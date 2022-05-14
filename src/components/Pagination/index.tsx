import { Box, Stack, Text } from "@chakra-ui/react";
import IfPassRender from "../IfPassRender";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
  totalCountOfRegisters: number;
  registerPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountOfRegisters,
  registerPerPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps): JSX.Element {
  const lastPage = Math.ceil(totalCountOfRegisters / registerPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Stack
      direction={["column", "row"]}
      spacing="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <IfPassRender check={currentPage > 1 + siblingsCount}>
          <PaginationItem onPageChange={onPageChange} number={1} />
          <IfPassRender check={currentPage > 2 + siblingsCount}>
            <Text color="gray.300" w="8" textAlign="center">
              ...
            </Text>
          </IfPassRender>
        </IfPassRender>

        <IfPassRender check={previousPages.length > 0}>
          {previousPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        </IfPassRender>

        <PaginationItem
          onPageChange={onPageChange}
          number={currentPage}
          isCurrent
        />

        <IfPassRender check={nextPages.length > 0}>
          {nextPages.map((page) => {
            return (
              <PaginationItem
                onPageChange={onPageChange}
                key={page}
                number={page}
              />
            );
          })}
        </IfPassRender>

        <IfPassRender check={currentPage + siblingsCount < lastPage}>
          <IfPassRender check={currentPage + 1 + siblingsCount < lastPage}>
            <Text color="gray.300" w="8" textAlign="center">
              ...
            </Text>
          </IfPassRender>
          <PaginationItem onPageChange={onPageChange} number={lastPage} />
        </IfPassRender>
      </Stack>
    </Stack>
  );
}
