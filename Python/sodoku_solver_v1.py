from data.beginner_board import beginner_board
from data.easy_board import easy_board
from data.medium_board import medium_board
from data.hard_board import hard_board
import time


board_size = 9


def print_board(arr):
    for i in range(9):
        for j in range(9):
            print(arr[i][j], end=" ")
        print()


def check_row_rule(board, row, num):
    for x in range(9):
        if board[row][x] == num:
            return False
    return True


def check_col_rule(board, col, num):
    for y in range(9):
        if board[y][col] == num:
            return False
    return True


def check_box_rule(board, row, col, num):
    row_start = row - row % 3
    col_start = col - col % 3
    for x in range(3):
        for y in range(3):
            if board[row_start + x][col_start + y] == num:
                return False
    return True


def is_valid_board(board, row, col, num):

    if not check_row_rule(board, row, num):
        return False

    if not check_col_rule(board, col, num):
        return False

    if not check_box_rule(board, row, col, num):
        return False

    return True


def solve_board(board, row=0, col=0):
    if col == board_size and row == board_size-1:
        return True

    if col == board_size:
        row += 1
        col = 0

    if board[row][col] == 0:
        for i in range(1, board_size+1, 1):
            if is_valid_board(board, row, col, i):
                board[row][col] = i

                if solve_board(board, row, col+1):
                    return True
                board[row][col] = 0
        return False
    return solve_board(board, row, col+1)


if __name__ == "__main__":
    board = easy_board

    start_time = time.time()
    if solve_board(board):
        print("Solution found")
        print_board(board)
    else:
        print_board(board)
        print("No solution")
    end_time = time.time()
    print('execution time: ', end_time - start_time, ' seconds')
